import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Row, Col } from 'antd';
import Carousel from 'react-grid-carousel';
import MintButton from '../MintBtn';

const Section = styled.section`
  position: relative;
  /* background: url(/images/Background.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px 0;
  overflow: hidden;
  min-height: 100vh;

  @media (max-width: 1921px) {
    /* min-height: 0px; */
    padding: 80px 0;
  }

  @media (max-width: 1168px) {
    /* min-height: 0px; */
    padding: 60px 0;
  }

  @media (max-width: 767px) {
    /* min-height: 0px; */
    padding: 40px 0;
  }
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

const IconImage = styled.img`
  position: absolute;
  width: 150%;
  right: -140px;
  top: -70px;

  @media (max-width: 1168px) {
    width: 50%;
    right: unset;
    top: unset;
  }
`;

const Wrapper = styled(Row)`
  min-height: 80vh;
  margin-top: 50px;
`;

const ContentWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const LeftContentWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  top: -100px;
  right: -100px;

  @media (max-width: 1168px) {
    top: 0px;
    right: 0px;
    min-height: 60vh;
  }
`;
const RightContentWrapper = styled(Col)`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  top: 50px;
  right: 50px;

  @media (max-width: 1168px) {
    top: 0px;
    right: 0px;
    min-height: 70vh;
  }
`;

const Chibi = () => {
  return (
    <Section id="road_map">
      <Row gutter={[48, 0]}>
        <TitleWrapper span={24}>
          <TitleImage src="/images/road_map/roadmap1.png" alt="roadmap1" />
        </TitleWrapper>
        <TitleWrapper span={24}>
          <SubTitleImage
            src="/images/road_map/percentage.png"
            alt="percentage"
          />
        </TitleWrapper>
      </Row>
      <Wrapper gutter={[48, 48]}>
        <LeftContentWrapper xl={12}>
          <Row gutter={[48, 48]}>
            <ContentWrapper md={24} lg={24} xl={4}>
              <IconImage src="/images/road_map/1.png" alt="1" />
            </ContentWrapper>
            <ContentWrapper md={24} lg={24} xl={20}>
              <Title>30%</Title>
              <Paragraph>giveaway 3D Chibi project.</Paragraph>
            </ContentWrapper>
          </Row>
          <Row gutter={[48, 48]}>
            <ContentWrapper md={24} lg={24} xl={4}>
              <IconImage src="/images/road_map/3.png" alt="3" />
            </ContentWrapper>
            <ContentWrapper md={24} lg={24} xl={20}>
              <Title>50%</Title>
              <Paragraph>giveaway 1 eth for Chibi holder.</Paragraph>
            </ContentWrapper>
          </Row>
        </LeftContentWrapper>
        <RightContentWrapper xl={12}>
          <Row gutter={[48, 48]}>
            <ContentWrapper md={24} lg={24} xl={4}>
              <IconImage src="/images/road_map/4.png" alt="4" />
            </ContentWrapper>
            <ContentWrapper md={24} lg={24} xl={20}>
              <Title>80%</Title>
              <Paragraph>
                Playable avatars in The Sandbox Game for Chibi holder. NFT
                holders will receive an additional collection of NFTs used to
                access another metaverse.
              </Paragraph>
            </ContentWrapper>
          </Row>
          <Row gutter={[48, 48]}>
            <ContentWrapper md={24} lg={24} xl={4}>
              <IconImage src="/images/road_map/2.png" alt="2" />
            </ContentWrapper>
            <ContentWrapper md={24} lg={24} xl={20}>
              <Title>100%</Title>
              <Paragraph>
                Person that mints Highest stats Chibi will win 3 ETH.
              </Paragraph>
            </ContentWrapper>
          </Row>
        </RightContentWrapper>
      </Wrapper>
    </Section>
  );
};

export default Chibi;
