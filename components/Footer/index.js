import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Row, Col, Slider } from 'antd';
import MintButton from '../MintBtn';

const Section = styled.section`
  position: relative;
  /* background: url(/images/Background.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 20vw;
  overflow: hidden;
  min-height: 0px;

  @media (max-width: 1921px) {
    padding: 80px 10vw;
  }

  @media (max-width: 1168px) {
    padding: 60px 0;
  }

  @media (max-width: 767px) {
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
  width: 70%;

  @media (max-width: 1168px) {
    width: 30%;
  }

  @media (max-width: 767px) {
    width: 10%;
  }

  @media (max-width: 460px) {
    width: 40%;
  }
`;

const Container = styled(Row)`
  width: 410px;

  @media (max-width: 460px) {
    width: 210px;
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

const Marketplace = () => {
  return (
    <Section>
      <Row gutter={[48, 48]}>
        <FooterWrapper span={24}>
          <Title>Join The Community</Title>
        </FooterWrapper>
      </Row>
      <Row style={{ marginTop: '50px' }} g gutter={[0, 0]}>
        <ContentWrapper span={24}>
          <Container gutter={[0, 0]}>
            <ContentWrapper style={{ cursor: 'pointer' }} span={8}>
              <a
                href="https://twitter.com/ChibiVerseNFT"
                target="_blank"
                rel="noreferrer"
              >
                <ContentWrapper>
                  <ContentImage src="/images/Twitter.png" alt="twitter" />
                  <Paragraph style={{ padding: 0 }}>TWITTER</Paragraph>
                </ContentWrapper>
              </a>
            </ContentWrapper>
            <ContentWrapper style={{ cursor: 'pointer' }} span={8}>
              <ContentImage src="/images/Opensea.png" alt="opensea" />
              <Paragraph style={{ padding: 0 }}>Opensea</Paragraph>
            </ContentWrapper>
            <ContentWrapper style={{ cursor: 'pointer' }} span={8}>
              <a
                href="https://discord.gg/HFa67RWDm6"
                target="_blank"
                rel="noreferrer"
              >
                <ContentWrapper>
                  <ContentImage src="/images/Discord.png" alt="discord" />
                  <Paragraph style={{ padding: 0 }}>Discord</Paragraph>
                </ContentWrapper>
              </a>
            </ContentWrapper>
          </Container>
        </ContentWrapper>
      </Row>

      <Row gutter={[0, 0]}>
        <FooterWrapper span={24}>
          <Paragraph>copyright © CHIBIVERSE 2021.</Paragraph>
          <Paragraph>- Powered By TOFFYSOFT -</Paragraph>
        </FooterWrapper>
      </Row>
    </Section>
  );
};

export default Marketplace;
