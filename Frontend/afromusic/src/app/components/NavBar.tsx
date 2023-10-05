import React, { useState } from 'react';
import styled from '@emotion/styled';


const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Logo = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const BurgerMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    width: 25px;
    height: 3px;
    background-color: #fff;
    margin-bottom: 4px;
    transition: all 0.3s linear;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  ${(props) =>
    props.isOpen &&
    `
    span:first-of-type {
      transform: rotate(45deg) translate(-1px, 1px);
    }

    span:nth-of-type(2) {
      opacity: 0;
    }

    span:last-of-type {
      transform: rotate(-45deg) translate(-2px, -1px);
    }
  `}
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #333;
    padding: 20px;
    transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavItem = styled.li`
  margin-left: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;


const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle: () => void = () => {
  setIsMenuOpen(!isMenuOpen);
};

  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <Nav>
      <Logo onClick={() => handleSmoothScroll('home')}>Logo Name</Logo>
      <BurgerMenu onClick={handleMenuToggle} isOpen={isMenuOpen}>
        <span />
        <span />
        <span />
      </BurgerMenu>
      <NavMenu isOpen={isMenuOpen}>
        <NavItem onClick={() => handleSmoothScroll('songList')}>Song Lists</NavItem>
        <NavItem onClick={() => handleSmoothScroll('addSong')}>Add Song</NavItem>
        <NavItem onClick={() => handleSmoothScroll('viewStatistics')}>View Statistics</NavItem>
      </NavMenu>
    </Nav>
  );
};


export default NavBar;