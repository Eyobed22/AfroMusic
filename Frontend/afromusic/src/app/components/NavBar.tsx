import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

const BurgerMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  cursor: pointer;
  padding: 10px;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }

  .fa-bars {
    font-size: 24px;
    color: #fff;
  }
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

  const handleMenuToggle = () => {
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
      <Logo onClick={() => handleSmoothScroll('home')}>Afro Music</Logo>
      <BurgerMenu onClick={handleMenuToggle} isOpen={isMenuOpen}>
        <FontAwesomeIcon icon={faBars} className="fa-bars" />
      </BurgerMenu>
      <NavMenu isOpen={isMenuOpen}>
        <NavItem onClick={() => handleSmoothScroll('songList')}>Song Lists</NavItem>
        <NavItem onClick={() => handleSmoothScroll('viewStatistics')}>View Statistics</NavItem>
      </NavMenu>
    </Nav>
  );
};

export default NavBar;
