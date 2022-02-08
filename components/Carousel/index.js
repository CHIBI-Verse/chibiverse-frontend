import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import { Row, Col, Slider } from 'antd';
import Carousel from 'react-grid-carousel';

const Section = styled.section`
  position: relative;
  /* background: url(/images/Background.png); */
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0;
  overflow: hidden;
  min-height: 100vh;

  margin: 0px -20px;

  @media (max-width: 1921px) {
    min-height: 0px;
    padding: 0;
  }

  @media (max-width: 1168px) {
    min-height: 0px;
    padding: 0;
  }

  @media (max-width: 767px) {
    min-height: 0px;
    padding: 0;
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
      <Row gutter={[0, 0]}>
        <ContentWrapper span={24}>
          <Carousel
            hideArrow
            cols={9}
            rows={3}
            gap={0}
            loop
            autoplay={3000}
            responsiveLayout={[
              {
                breakpoint: 768,
                cols: 3,
                rows: 3,
                gap: 0,
                loop: true,
                autoplay: 3000,
              },
              // {
              //   breakpoint: 1168,
              //   cols: 6,
              //   rows: 4,
              //   gap: 0,
              //   loop: true,
              //   autoplay: 3000,
              // },
            ]}
          >
            {_.times(108, (i) => (
              <Carousel.Item key={i}>
                <img width="100%" src={`/images/CHIBIs/${i + 1}.png`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </ContentWrapper>
      </Row>
    </Section>
  );
};

export default Marketplace;
