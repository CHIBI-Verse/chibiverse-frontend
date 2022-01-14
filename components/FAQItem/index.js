import React from 'react';
import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px 40px;
  background: #fffbf3;
  border: 5px solid #000;
  filter: drop-shadow(12px 9px 0 #f2980b);
  transition: all 0.2s ease-out;
  cursor: pointer;
  width: 100%;
  cursor: pointer;
`;

const QWrapper = styled.div`
  text-align: center;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: column;
`;

const Q = styled.p`
  font-size: 1.5rem;
  line-height: 30px;
  color: #000;
  font-family: marvinregular;
  position: relative;
`;

const Icon = styled(DownOutlined)`
  margin-left: 20px;
  transition-duration: 0.8s;
  transition-property: transform;
  transform: rotate(${({ open }) => (open ? '180deg' : '0deg')});
`;

const A = styled.p`
  font-size: 1rem;
  line-height: 30px;
  color: #000;
  font-family: marvinregular;
  position: relative;
`;

const AWrapper = styled.div`
  text-align: center;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-direction: column;
  display: ${({ open }) => (open ? 'block' : 'none')};
`;

const FAQItem = ({ q, a, open, onClick = () => {}, children }) => {
  return (
    <Wrapper onClick={onClick}>
      <QWrapper>
        <Q>
          {q}
          <Icon open={open} />
        </Q>
      </QWrapper>

      <AWrapper open={open}>{children ? children : <A>{a}</A>}</AWrapper>
    </Wrapper>
  );
};

export default FAQItem;
