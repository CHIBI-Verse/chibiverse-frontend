import React from 'react';
import styled from 'styled-components';

import { Row, Col, Slider } from 'antd';
import Unity, { UnityContext } from 'react-unity-webgl';

const unityContext = new UnityContext({
  loaderUrl: 'build/Game Concept Demo.loader.js',
  dataUrl: 'build/Game Concept Demo.data',
  frameworkUrl: 'build/Game Concept Demo.framework.js',
  codeUrl: 'build/Game Concept Demo.wasm',
});

const Section = styled.section`
  position: relative;
  /* background: url(/images/Background.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 20vw;
  overflow: hidden;
  min-height: 600px;

  @media (max-width: 1921px) {
    /* min-height: 0px; */
    padding: 80px 10vw;
  }

  @media (max-width: 1168px) {
    /* min-height: 0px; */
    padding: 80px 10vw;
    display: none;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const ContentWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Video = styled.video`
  width: 80%;
`;

const Title = styled.p`
  color: #fff;
  font-family: marvinregular;
  width: 100%;
  padding: 0px 60px;
  font-size: 3vw;
  margin-bottom: 0px;
  text-align: center;

  @media (max-width: 1920px) {
    font-size: 3.6vw;
  }

  @media (max-width: 1168px) {
    font-size: 4vw;
  }
  @media (max-width: 767px) {
    font-size: 5.5vw;
  }
`;

const Paragraph = styled.p`
  color: #fff;
  font-family: marvinregular;
  width: 100%;
  padding: 0px 60px;
  font-size: 1vw;

  text-align: center;

  @media (max-width: 1920px) {
    font-size: 1.6vw;
  }

  @media (max-width: 1168px) {
    font-size: 3vw;
  }

  @media (max-width: 767px) {
    font-size: 4vw;
  }
`;

const TitleWrapper = styled(Col)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TitleImage = styled.img`
  width: 60%;

  @media (max-width: 1168px) {
    width: 80%;
  }

  @media (max-width: 767px) {
    width: 90%;
  }
`;

const ContentImage = styled.img`
  width: 30%;

  @media (max-width: 1168px) {
    width: 50%;
  }

  @media (max-width: 767px) {
    width: 70%;
  }
`;

const FooterWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0px 0px;
`;

const GameDemo = () => {
  return (
    <Section>
      <Row gutter={[0, 0]}>
        <ContentWrapper span={24}>
          <Unity
            style={{
              width: '100%',
              height: 600,
              maxWidth: 1080,
              border: '2px solid black',
              background: 'grey',
            }}
            unityContext={unityContext}
          />
        </ContentWrapper>
      </Row>
      <Row gutter={[48, 0]}>
        <TitleWrapper>
          <Paragraph>
            Concept Demo press A and D to move the character.
          </Paragraph>
        </TitleWrapper>
      </Row>
    </Section>
  );
};

export default GameDemo;
