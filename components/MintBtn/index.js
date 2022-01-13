import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-image: url(/images/mint_btn.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 341px;
  height: 153px;
  border-radius: 50px;
  margin-top: 130px;
  margin-left: 40px;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 170px;
    height: 75px;
    border-radius: 25px;
    margin-left: 0px;
  }
`;

export default Button;
