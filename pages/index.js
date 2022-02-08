import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import HamburgerMenu from '../components/Hamburger';
// import About from '../components/About';
// import Features from '../components/Features';
// import Marketplace from '../components/Marketplace';
// import Chibi from '../components/Chibi';
// import Carousel from '../components/Carousel';
// import GamePlay from '../components/GamePlay';
// import RoadMap from '../components/RoadMap';
// import RoadMapProgress from '../components/RoadMapProgress';
// import Future from '../components/Future';
// import Team from '../components/Team';
// import FAQ from '../components/FAQ';
// import Footer from '../components/Footer';
import MintButton from '../components/MintBtn';

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
      </ContentContainer>
    </ContentContainer>
  );
}
