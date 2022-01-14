import React from 'react';
import styled from 'styled-components';

import { Row, Col, Timeline } from 'antd';
import Carousel from 'react-grid-carousel';
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
    /* min-height: 0px; */
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

const SubTitleImage = styled.img`
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

const Q1Title = styled(Title)`
  position: absolute;
  width: 600px;
  left: -500%;
  top: 100%;
`;
const Q2Title = styled(Title)`
  position: absolute;
  width: 600px;
  left: -500%;
  top: -200%;
`;
const Q3Title = styled(Title)`
  position: absolute;
  width: 600px;

  left: -500%;
  top: 100%;
`;
const Q4Title = styled(Title)`
  position: absolute;
  width: 600px;
  left: -500%;
  top: -200%;
`;

const Q1Paragraph = styled(Paragraph)`
  position: absolute;
  width: 400px;
  left: -300%;
  top: 300%;
`;
const Q2Paragraph = styled(Paragraph)`
  position: absolute;
  width: 400px;
  left: -300%;
  top: -750%;

  @media (max-width: 1440px) {
    top: -550%;
  }
`;
const Q3Paragraph = styled(Paragraph)`
  position: absolute;
  width: 400px;
  left: -300%;
  top: 300%;
`;
const Q4Paragraph = styled(Paragraph)`
  position: absolute;
  width: 400px;
  left: -300%;
  top: -500%;
  @media (max-width: 1440px) {
    top: -350%;
  }
`;

const Line = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 1vh;
  background-color: #fff;
  border-radius: 10px;
`;

const Dot = styled.div`
  width: 5vh;
  height: 5vh;
  background-color: #fff;
  border-radius: 100px;
  position: relative;
`;

const Horizontal = styled(Col)`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Vertical = styled(Col)`
  display: none;
  @media (max-width: 1024px) {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px;
  }
`;

const VerticalLine = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 1vw;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
`;

const VerticalDot = styled.div`
  width: 5vw;
  height: 5vw;
  background-color: #fff;
  border-radius: 100px;
  position: relative;
`;

const Q1VerticalTitle = styled(Title)`
  position: absolute;
  width: 50vw;
  left: -100%;
  top: -300%;

  @media (max-width: 440px) {
    width: 60vw;
  }
`;
const Q2VerticalTitle = styled(Title)`
  position: absolute;
  width: 50vw;
  left: -900%;
  top: -200%;
  @media (max-width: 440px) {
    width: 60vw;
  }
`;
const Q3VerticalTitle = styled(Title)`
  position: absolute;
  width: 50vw;
  left: -10%;
  top: -100%;
  @media (max-width: 440px) {
    width: 60vw;
  }
`;
const Q4VerticalTitle = styled(Title)`
  position: absolute;
  width: 50vw;
  left: -900%;
  top: -100%;
  @media (max-width: 440px) {
    width: 60vw;
  }
`;
const Q1VerticalParagraph = styled(Paragraph)`
  position: absolute;
  width: 50vw;
  left: -100%;
  top: -100%;
  @media (max-width: 440px) {
    width: 60vw;
  }
`;
const Q2VerticalParagraph = styled(Paragraph)`
  position: absolute;
  width: 50vw;
  left: -900%;
  top: -10%;

  @media (max-width: 440px) {
    width: 60vw;
  }
`;
const Q3VerticalParagraph = styled(Paragraph)`
  position: absolute;
  width: 50vw;
  left: -10%;
  top: 40%;
  @media (max-width: 440px) {
    width: 60vw;
  }
`;
const Q4VerticalParagraph = styled(Paragraph)`
  position: absolute;
  width: 50vw;
  left: -900%;
  top: 100%;
  @media (max-width: 440px) {
    width: 60vw;
  }
`;

const Chibi = () => {
  return (
    <Section id="road_map">
      <Row gutter={[48, 0]}>
        <TitleWrapper span={24}>
          <SubTitleImage src="/images/road_map/roadmap2.png" alt="roadmap2" />
        </TitleWrapper>
      </Row>
      <Row
        style={{
          marginTop: '60px',
        }}
        gutter={[48, 0]}
      >
        <Horizontal span={24}>
          <Line>
            <Dot>
              <Q1Title>Q1 2022</Q1Title>
              <Q1Paragraph>
                Concept Art Game Concepts Website Roadmap
              </Q1Paragraph>
            </Dot>
            <Dot>
              <Q2Paragraph>
                IDO/Release Alpha game (P2E) P2P marketplace Farming system
                Listing on DEX
              </Q2Paragraph>
              <Q2Title>Q2 2022</Q2Title>
            </Dot>
            <Dot>
              <Q3Title>Q3 2022</Q3Title>
              <Q3Paragraph>
                Release Beta Game Carft/Upgrade Arena Land Dungeon
              </Q3Paragraph>
            </Dot>
            <Dot>
              <Q4Paragraph>Release Full Game Connect Loot NFTs</Q4Paragraph>
              <Q4Title>Q4 2022</Q4Title>
            </Dot>
          </Line>
        </Horizontal>
        <Vertical span={24}>
          <VerticalLine>
            <VerticalDot>
              <Q1VerticalTitle>Q1 2022</Q1VerticalTitle>
              <Q1VerticalParagraph>
                Concept Art Game Concepts Website Roadmap
              </Q1VerticalParagraph>
            </VerticalDot>
            <VerticalDot>
              <Q2VerticalTitle>Q2 2022</Q2VerticalTitle>
              <Q2VerticalParagraph>
                IDO/Release Alpha game (P2E) P2P marketplace Farming system
                Listing on DEX
              </Q2VerticalParagraph>
            </VerticalDot>
            <VerticalDot>
              <Q3VerticalTitle>Q3 2022</Q3VerticalTitle>
              <Q3VerticalParagraph>
                Release Beta Game Carft/Upgrade Arena Land Dungeon
              </Q3VerticalParagraph>
            </VerticalDot>
            <VerticalDot>
              <Q4VerticalTitle>Q4 2022</Q4VerticalTitle>
              <Q4VerticalParagraph>
                Release Full Game Connect Loot NFTs
              </Q4VerticalParagraph>
            </VerticalDot>
          </VerticalLine>
        </Vertical>
      </Row>
      <Row gutter={[48, 48]}>
        <FooterWrapper span={24}>
          <Paragraph>
            The Chibi token will be launched along with staking and farming
            opportunities.
          </Paragraph>
          <Paragraph>
            An entire ecosystem to give max benefit to our NFT holders.
          </Paragraph>
        </FooterWrapper>
      </Row>
    </Section>
  );
};

export default Chibi;
