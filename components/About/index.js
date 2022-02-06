import React from 'react';
import styled from 'styled-components';

import { Row, Col, Slider } from 'antd';
import MintButton from '../MintBtn';

const Section = styled.section`
  position: relative;
  /* background: url(/images/Background.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 20vw;
  overflow: hidden;
  min-height: 100vh;

  @media (max-width: 1921px) {
    min-height: 0px;
    padding: 80px 10vw;
  }

  @media (max-width: 1168px) {
    min-height: 0px;
    padding: 60px 0;
  }

  @media (max-width: 767px) {
    min-height: 0px;
    padding: 40px 0;
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

const Paragraph = styled.p`
  color: #fff;
  font-family: marvinregular;
  width: 100%;
  padding: 0px 60px;
  font-size: 1vw;

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

const About = () => {
  return (
    <Section id="about">
      <Row gutter={[48, 48]}>
        <ContentWrapper lg={24} xl={12}>
          <Video autoPlay loop muted>
            <source src="/video/about.webm" type="video/webm" />
          </Video>
          <MintButton
            style={{
              marginTop: '0px',
              marginLeft: '0px',
            }}
          />
        </ContentWrapper>
        <ContentWrapper lg={24} xl={12}>
          <img src="/images/about.png" alt="about chibi" width="100%" />
          <Paragraph>
            10,000 randomly generated NFTs characters on Ethereum blockchain as
            ERC-721 tokens. Chibiverse is a play-to-earn on-chain game and
            eco-system.
          </Paragraph>
          <Paragraph>
            Each player needs a minimum of 1 Chibi to join the game for rewards.
          </Paragraph>
          <Paragraph>
            Every character is created by a random algorithm which ensures that
            each character is unique and differentiated from the others.
          </Paragraph>
          <Paragraph>
            Some Chibi possesses very rare traits that will set them apart from
            the rest of the bunch.
          </Paragraph>
        </ContentWrapper>
      </Row>
    </Section>
  );
};

export default About;
