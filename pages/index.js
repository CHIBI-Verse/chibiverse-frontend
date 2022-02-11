import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
// @ts-ignore
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';

import MintButton from '../components/MintBtn';
import NFT from '../artifacts/contracts/ChibiVerse.json';

const About = dynamic(() => import('../components/About'));
const Features = dynamic(() => import('../components/Features'));
const Chibi = dynamic(() => import('../components/Chibi'));
const RoadMap = dynamic(() => import('../components/RoadMap'));
const RoadMapProgress = dynamic(() => import('../components/RoadMapProgress'));
const Future = dynamic(() => import('../components/Future'));
const FAQ = dynamic(() => import('../components/FAQ'));
const Footer = dynamic(() => import('../components/Footer'));
const Marketplace = dynamic(() => import('../components/Marketplace'), {
  ssr: false,
});
const Carousel = dynamic(() => import('../components/Carousel'), {
  ssr: false,
});
const GamePlay = dynamic(() => import('../components/GamePlay'), {
  ssr: false,
});
const GameDemo = dynamic(() => import('../components/GameDemo'), {
  ssr: false,
});
const Team = dynamic(() => import('../components/Team'), {
  ssr: false,
});

const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

const Video = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;

  @media (min-width: 1200px) {
    object-fit: fill;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  color: #fff;
  font-family: marvinregular;
  margin-top: 360px;
  margin-left: 80px;

  font-size: 3.6vw;
  @media (max-width: 1920px) {
    font-size: 4vw;
  }

  @media (max-width: 1168px) {
    margin-top: 160px;
    margin-left: 20px;
    font-size: 10vw;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  background: url(/images/Background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  min-height: 100vh;
`;

function initWeb3(provider) {
  const web3 = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: 'chainId',
        call: 'eth_chainId',
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });

  return web3;
}

function getProviderOptions() {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
        rpc: {
          1: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
          4: `https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
        },
      },
    },
  };

  return providerOptions;
}

let web3Modal;
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: true,
    providerOptions: getProviderOptions(),
  });
}

export default function Home() {
  const [chainId, setChainId] = React.useState(
    parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10),
  );

  const intvl = React.useRef(null);
  const [fetching, setFetching] = React.useState(false);
  const [address, setAddress] = React.useState('');
  const [web3, setWeb3] = React.useState(null);
  const [provider, setProvider] = React.useState(null);
  const [connected, setConnected] = React.useState(false);
  const [assets, setAssets] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [pendingRequest, setPendingRequest] = React.useState(false);
  const [result, setResult] = React.useState(null);
  const [nftContract, setNftContract] = React.useState(null);

  const [web3Provider, setWeb3Provider] = React.useState(null);
  const [signer, setSigner] = React.useState(null);
  const [err, setErr] = React.useState(null);
  const [bgColor, setBgColor] = React.useState(null);
  const [mintAble, setMintAble] = React.useState(false);
  const [isOwner, setIsOwner] = React.useState(false);
  const [whitelistTarget, setWhitelistTarget] = React.useState('');
  const [newOwnerTarget, setNewOwnerTarget] = React.useState('');
  const [toAddress, setToAddress] = React.useState('');
  const [sendToken, setSendToken] = React.useState('');
  const [amount, setAmount] = React.useState(1);

  const onConnect = async () => {
    if (connected && provider && web3 && address) return;

    setFetching(true);
    try {
      const provider = await web3Modal.connect();

      const Web3 = initWeb3(provider);

      const accounts = await Web3.eth.getAccounts();

      const address = accounts[0];

      const cId = await Web3.eth.net.getId();

      if (cId !== parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10)) {
        if (provider?.infuraId) {
          alert('Invalid Network!');

          return;
        }

        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: `0x${process.env.NEXT_PUBLIC_CHAIN_ID}` }], // chainId must be in hexadecimal numbers
        });
        setChainId(parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10));
      }

      setAddress(address);
      setChainId(cId);

      await subscribeProvider(provider, Web3);

      const web3Provider = new ethers.providers.Web3Provider(provider);

      const signer = web3Provider.getSigner();

      const nftContract = new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        NFT.abi,
        signer,
      );

      const totalSupply = await nftContract.totalSupply();

      setNftContract(nftContract);
      setWeb3Provider(web3Provider);
      setSigner(signer);
      setWeb3(Web3);
      setProvider(provider);

      setFetching(false);
      setConnected(true);
    } catch (e) {
      console.log({ e });
      setFetching(false);
      setErr(e?.data ?? e);
      resetApp();
    }
  };

  const subscribeProvider = async (provider, W3) => {
    if (!provider.on) {
      return;
    }
    provider.on('disconnect', () => resetApp());
    provider.on('accountsChanged', async (accounts) => {
      setAddress(accounts[0]);
    });
    provider.on('chainChanged', async (chainId) => {
      const networkId = await W3.eth.net.getId();
      setChainId(parseInt(networkId, 10));
    });
  };

  const resetApp = async () => {
    try {
      if (web3 && web3.currentProvider && web3.currentProvider.close) {
        await web3.currentProvider.close();
      }
      setFetching(false);
      setAddress('');
      setWeb3(null);
      setProvider(null);
      setConnected(false);
      setChainId(parseInt(process.env.NEXT_PUBLIC_CHAIN_ID));
      setShowModal(false);
      setPendingRequest(false);
      setResult(null);
      setIsOwner(false);
      await web3Modal?.clearCachedProvider();
    } catch (e) {
      setErr(e?.data ?? e);
    }
  };

  const handleClickMint = async () => {
    try {
      if (!connected || !provider || !web3 || !address) {
        return onConnect();
      }

      setFetching(true);

      const claimable = await nftContract.claimable(address);
      let price = await nftContract.CHIBI_PRICE();
      price = price.toNumber();

      console.log({ price, claimable, nftContract });

      const options = { value: price * amount };
      await nftContract.mint(amount, options);

      const walletOfOwner = await nftContract.walletOfOwner(address);
      console.log({ walletOfOwner });

      setFetching(false);
    } catch (e) {
      setFetching(false);
      console.error({ e });

      setErr(e?.data ?? e);
    }
  };

  // // Auto connect to the cached provider
  // React.useEffect(() => {
  //   if (web3Modal?.cachedProvider) {
  //     onConnect();
  //   }
  // }, []);

  React.useEffect(() => {
    async function handleChangNetwork() {
      // console.log({
      //   handleChangNetwork: chainId,
      //   window: typeof window,
      //   ethereum: window?.ethereum,
      //   connected,
      //   check: chainId !== parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10),
      // });
      try {
        if (
          typeof window !== 'undefined' &&
          window?.ethereum &&
          chainId !== parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10) &&
          connected
        ) {
          resetApp();
          // await window.ethereum.request({
          //   method: 'wallet_switchEthereumChain',
          //   params: [{ chainId: `0x${process.env.NEXT_PUBLIC_CHAIN_ID}` }], // chainId must be in hexadecimal numbers
          // });

          // setChainId(parseInt(process.env.NEXT_PUBLIC_CHAIN_ID, 10));
          // onConnect();
        }
      } catch (error) {
        console.log({ error });
        resetApp();
      }
    }

    handleChangNetwork();
  }, [chainId]);

  return (
    <ContentContainer>
      <Main>
        <Video autoPlay="autoplay" muted loop>
          <source src="/video/main.mp4" type="video/mp4" />
        </Video>
        <NavBar />
        <Container>
          <MintButton onClick={handleClickMint} />
          {/* <Title>Coming Soon...</Title> */}
        </Container>
      </Main>
      {/* <ContentContainer>
        <About />
        <Features />
        <Marketplace />
        <Chibi />
      </ContentContainer>
      <ContentContainer>
        <Carousel />
        <GamePlay />
        <GameDemo />
        <RoadMap />
        <RoadMapProgress />
        <Future />
        <Team />
        <FAQ />
        <Footer />
      </ContentContainer> */}
    </ContentContainer>
  );
}
