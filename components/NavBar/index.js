import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import HamburgerMenu from '../Hamburger';

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  max-width: 1800px;
  @media (max-width: 1920px) {
    max-width: 1600px;
  }

  margin: 40px auto;
  @media (max-width: 1168px) {
    margin: 0px auto;
  }
`;

const NavNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NavLinks = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  padding: 0px;

  @media (max-width: 1168px) {
    display: none;
  }

  li {
    color: #fff;
    font-family: marvinregular;

    font-size: 1.6vw;
    @media (max-width: 1920px) {
      font-size: 2vw;
    }

    a {
      color: #fff;
    }
  }
`;

const NavBar = () => {
  return (
    <NavContainer className="nav_container">
      <NavNavigation>
        <HamburgerMenu />
        <NavLinks>
          <li>
            <Link href="#about">ABOUT</Link>
          </li>
          <li>
            <Link href="#features">FEATURES</Link>
          </li>
          <li>
            <Link href="#marketplace">MARKETPLACE</Link>
          </li>
          <li>
            <Link href="#chibi">CHIBI</Link>
          </li>
          <li>
            <Link href="#road_map">ROAD MAP</Link>
          </li>
          <li>
            <Link href="#team">TEAM</Link>
          </li>
          <li>
            <Link href="#faq">FAQ</Link>
          </li>
        </NavLinks>
      </NavNavigation>
    </NavContainer>
  );
};

export default NavBar;
