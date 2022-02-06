import React from 'react';
import styled from 'styled-components';

import { Row, Col, Slider } from 'antd';
import Carousel from 'react-grid-carousel';

const Section = styled.section`
  position: relative;
  /* background: url(/images/Background.jpg); */
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
            rows={4}
            gap={0}
            loop
            autoplay={3000}
            responsiveLayout={[
              {
                breakpoint: 768,
                cols: 3,
                rows: 4,
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
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/1.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/2.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/3.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/4.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/5.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/6.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/7.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/8.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/9.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/10.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/11.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/12.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/13.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/14.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/15.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/16.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/17.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/18.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/19.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/20.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/21.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/22.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/23.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/24.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/25.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/26.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/27.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/28.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/29.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/30.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/8.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/1.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/17.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/4.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/24.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/25.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/31.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/32.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/33.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/34.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/35.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/36.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/37.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/38.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/39.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/40.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/41.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/42.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/43.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/44.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/45.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/46.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/47.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/48.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/49.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/50.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/51.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/52.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/53.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/54.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/55.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/56.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/57.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/58.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/59.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/60.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/8.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/1.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/17.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/4.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/24.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/25.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/1.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/2.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/3.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/4.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/5.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/6.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/7.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/8.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/9.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/10.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/11.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/12.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/13.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/14.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/15.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/16.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/17.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/18.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/19.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/20.jpg" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/21.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/22.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/23.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/24.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/40.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/41.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/42.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/43.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/44.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/45.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/46.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/47.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/48.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/49.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/50.png" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/CHIBIs/51.png" />
            </Carousel.Item>
          </Carousel>
        </ContentWrapper>
      </Row>
    </Section>
  );
};

export default Marketplace;
