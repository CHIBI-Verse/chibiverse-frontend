import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Row, Col, Slider } from 'antd';
import Carousel from 'react-grid-carousel';

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

const Marketplace = () => {
  return (
    <Section>
      <Row style={{ marginTop: '40px' }} gutter={[48, 0]}>
        <TitleWrapper span={24}>
          <TitleImage src="/images/gameplay.png" alt="gameplay" />
        </TitleWrapper>
      </Row>
      <Row gutter={[0, 0]}>
        <ContentWrapper span={24}>
          <Carousel hideArrow cols={1} rows={1} gap={50} loop autoplay={3000}>
            <Carousel.Item>
              <img width="100%" src="/images/game1.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/game2.jpg" />
            </Carousel.Item>
          </Carousel>
        </ContentWrapper>
      </Row>
    </Section>
  );
};

export default Marketplace;
