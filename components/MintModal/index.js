import React, { useRef } from 'react';
import styled from 'styled-components';

import { Row, Col, Slider } from 'antd';
import { useOnClickOutside } from '../../hooks';

const BaseModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: flex-start;
  background: #0006;
  visibility: ${(props) => (props?.show ? 'visible' : 'hidden')};
  transition: visibility 0s linear 300ms, opacity 400ms;
`;

const Modal = styled.div`
  background: #fff;
  color: #000;
  border-radius: 20px;
  margin-top: 1rem;
  position: relative;
  max-width: 100%;
  z-index: 3;
  margin-top: 430px;
`;

const Body = styled.div`
  min-width: 300px;
  max-width: 400px;
  padding: 2rem;

  @media (max-width: 767px) {
    max-width: 300px;
  }
`;

const Head = styled.video`
  display: block;
  margin: -12rem auto 0;
  max-width: 80%;
`;

const Close = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  z-index: 1;
`;

const Svg = styled.svg`
  overflow: visible;
  width: 0.6875em;
  vertical-align: -0.225em;
  fill: #0007;
  font-size: 1.33333em;
  line-height: 0.75em;
  display: inline-block;
  height: 1em;
`;

const H3 = styled.h3`
  font-family: marvinregular;
  text-align: center;
`;

const Form = styled.form`
  justify-content: center;
  /* align-items: center; */
  display: flex;
`;

const FormBody = styled.div`
  text-align: center;
  max-width: 300px;
`;

const Quantity = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin-top: 1rem;
`;

const QuantityItem = styled.div`
  font-family: marvinregular;
  border: 1px solid #e6e6e6;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  text-align: center;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  font-family: marvinregular;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0 0;
  border: 1px solid #e6e6e6;
  border-radius: 0.5rem;
  outline: none;
  padding-right: 4rem;
  width: 100%;
`;

const InputDecoration = styled.span`
  font-family: marvinregular;
  position: absolute;
  top: 1.25rem;
  right: 0.5rem;
  margin-left: -3rem;
  color: #ee6226;
  font-size: 0.8125rem;
  cursor: pointer;
  float: right !important;
`;

const PurchaseBtn = styled.button`
  font-family: marvinregular;
  font-weight: 700;
  background: #ee6226;
  color: hsla(0, 0%, 100%, 0.9);
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin: 1rem auto 0;
  border: 0;
  text-decoration: none;
  border-radius: 2rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.1s;
  min-width: 200px;
`;

const MintModal = ({ onClose = () => {}, show }) => {
  const wrapperRef = useRef(null);

  useOnClickOutside(wrapperRef, onClose);

  return (
    <BaseModal show={show}>
      <Modal ref={wrapperRef}>
        <Body>
          <Close onClick={onClose}>
            <Svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="times"
              className="svg-inline--fa fa-times fa-w-11 fa-lg "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 352 512"
            >
              <path
                fill="currentColor"
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
              ></path>
            </Svg>
          </Close>
          <Head autoPlay loop muted>
            <source src="/video/about.webm" type="video/webm" />
          </Head>
          <H3>
            <b>Mint CHiBI</b>
          </H3>
          <div style={{ textAlign: 'center' }}>0.006 ETH</div>
          <Form>
            <FormBody>
              <Quantity>
                <QuantityItem>1</QuantityItem>
                <QuantityItem>2</QuantityItem>
                <QuantityItem>5</QuantityItem>
                <QuantityItem>10</QuantityItem>
              </Quantity>
              <InputWrapper>
                <Input
                  type="text"
                  min="1"
                  max="20"
                  placeholder="Insert custom amount"
                  value="1"
                />
                <InputDecoration>Max. 20</InputDecoration>
              </InputWrapper>
              <PurchaseBtn>Purchase</PurchaseBtn>
            </FormBody>
          </Form>
        </Body>
      </Modal>
    </BaseModal>
  );
};

export default MintModal;
