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
  width: 40%;

  @media (max-width: 1168px) {
    width: 60%;
  }

  @media (max-width: 767px) {
    width: 80%;
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

const Features = () => {
  return (
    <Section id="features">
      <Row gutter={[48, 48]}>
        <TitleWrapper span={24}>
          <TitleImage src="/images/features.png" alt="features chibi" />
        </TitleWrapper>
      </Row>
      <Row gutter={[0, 48]}>
        <ContentWrapper md={12} lg={8} xl={8} xxl={8}>
          <img src="/images/pic-Train.png" alt="features train" width="100%" />
          <img src="/images/Train.png" alt="features train" width="100%" />
          <Paragraph>
            Train with your Chibi to gain experience and level up.
          </Paragraph>
          <Paragraph>Higher-level have access to higher rewards.</Paragraph>
        </ContentWrapper>
        <ContentWrapper md={12} lg={8} xl={8} xxl={8}>
          <img
            src="/images/pic-Upgrade.png"
            alt="features upgrade"
            width="100%"
          />
          <img src="/images/Upgrade.png" alt="features upgrade" width="100%" />
          <Paragraph>
            Upgrade your gear for better rewards or be sold for coin.
          </Paragraph>
        </ContentWrapper>
        <ContentWrapper md={12} lg={8} xl={8} xxl={8}>
          <img src="/images/pic-Farm.png" alt="features farm" width="100%" />
          <img src="/images/Farm.png" alt="features farm" width="100%" />
          <Paragraph>Send your Chibi farming to earn coin.</Paragraph>
        </ContentWrapper>
        <ContentWrapper md={12} lg={8} xl={8} xxl={8}>
          <img src="/images/pic-Arena.png" alt="features arena" width="100%" />
          <img src="/images/Arena.png" alt="features arena" width="100%" />
          <Paragraph>
            Arena game will be 1V1 matches with another player.
          </Paragraph>
          <Paragraph>
            Higher ranked will have better potential rewards.
          </Paragraph>
        </ContentWrapper>
        <ContentWrapper md={12} lg={8} xl={8} xxl={8}>
          <img
            src="/images/pic-Dungeon.png"
            alt="features dungeon"
            width="100%"
          />
          <img src="/images/Dungeon.png" alt="features dungeon" width="100%" />
          <Paragraph>
            Chibi can explore to different locations in the dungeon to fight
            with monsters and earn more coin.
          </Paragraph>
        </ContentWrapper>
        <ContentWrapper md={12} lg={8} xl={8} xxl={8}>
          <img src="/images/pic-Land.png" alt="features land" width="100%" />
          <img src="/images/Land.png" alt="features land" width="100%" />
          <Paragraph>
            Land Owners will receive buffs making farming, upgrade, and coins
            more efficient.
          </Paragraph>
        </ContentWrapper>
      </Row>
      <Row gutter={[48, 48]}>
        <FooterWrapper span={24}>
          <Title>Exclusively to our NFTs owners.</Title>
          <Paragraph>
            Each Chibi holders is entitled to free airdrops of the game’s token
            (Q2 2022).
          </Paragraph>
        </FooterWrapper>
      </Row>
    </Section>
  );
};

export default Features;
