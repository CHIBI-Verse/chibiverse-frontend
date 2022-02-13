import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const GameDemo = dynamic(() => import('../components/GameDemo'), {
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
    <>
      <ContentContainer>
        <Main>
          <Video autoPlay="autoplay" muted loop>
            <source src="/video/main.mp4" type="video/mp4" />
          </Video>
          <Container>
            <GameDemo />
          </Container>
        </Main>
      </ContentContainer>
    </>
  );
}
