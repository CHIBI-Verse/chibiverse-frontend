import Head from 'next/head';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import HamburgerMenu from '../components/Hamburger';
import About from '../components/About';
import Features from '../components/Features';
import Marketplace from '../components/Marketplace';
import Chibi from '../components/Chibi';
import Carousel from '../components/Carousel';
import GamePlay from '../components/GamePlay';
import MintButton from '../components/MintBtn';

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

export default function Home() {
  return (
    <ContentContainer>
      <Main>
        <Video autoPlay="autoplay" muted loop>
          <source src="/video/main.mp4" type="video/mp4" />
        </Video>
        <NavBar />
        <Container>
          <MintButton />
          {/* <Title>Coming Soon...</Title> */}
        </Container>
      </Main>
      <ContentContainer>
        <About />
        <Features />
        <Marketplace />
        <Chibi />
        <Carousel />
        <GamePlay />
      </ContentContainer>
    </ContentContainer>
  );
}
