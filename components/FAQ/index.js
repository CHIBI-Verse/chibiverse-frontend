import React from 'react';
import styled from 'styled-components';

import { Row, Col } from 'antd';
import Carousel from 'react-grid-carousel';
import FAQItem from '../FAQItem';

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
    /* min-height: 0px; */
    padding: 60px 0;
  }

  @media (max-width: 767px) {
    /* min-height: 0px; */
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

const Container = styled(Row)`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const List = styled(Col)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1132px;
`;

const FAQ = () => {
  const [qNo, setQNo] = React.useState('');

  const handleClick = (no) => () => {
    if (no === qNo) return setQNo('');

    setQNo(no);
  };
  return (
    <Section id="faq">
      <Row gutter={[48, 0]}>
        <TitleWrapper span={24}>
          <SubTitleImage src="/images/faq.png" alt="faq" />
        </TitleWrapper>
      </Row>
      <Container gutter={[0, 0]}>
        <List span={24}>
          <FAQItem
            onClick={handleClick('1')}
            open={qNo === '1'}
            q="What's Chibiverse?"
            a="Chibiverse is a Play-to-Earn 2D Massive Multiplayer Online Role-playing Game (2D-MMORPG) that is built using Ethereum blockchain technology."
          />
          <FAQItem
            onClick={handleClick('2')}
            open={qNo === '2'}
            q="When do Chibiverse launch?"
            a="28 FEB 2022 1PM UTC"
          />
          <FAQItem
            onClick={handleClick('3')}
            open={qNo === '3'}
            q="How many Chibiverse will be available?"
            a="10,000"
          />
          <FAQItem
            onClick={handleClick('4')}
            open={qNo === '4'}
            q="How many different Chibiverse traits are there?"
            a="There are 27 Eyes, 40 Heads, 8 Skins, 10 Backgrounds, 39 Outfits, 21 Items, 24 Mouths, 36 Weapons, and 6 types "
          />
          <FAQItem
            onClick={handleClick('5')}
            open={qNo === '5'}
            q="What will the mint price be?"
            a="The price to mint a Chibiverse will be 0.006 ETH."
          />
          <FAQItem
            onClick={handleClick('6')}
            open={qNo === '6'}
            q="What is the maximum mint per wallet?"
            a="No limit. 20 Chibi per Transactions."
          />
          <FAQItem
            onClick={handleClick('7')}
            open={qNo === '7'}
            q="Is this a rug pull?"
          >
            <img src="/images/no.gif" alt="no" />
          </FAQItem>
        </List>
      </Container>
    </Section>
  );
};

export default FAQ;
