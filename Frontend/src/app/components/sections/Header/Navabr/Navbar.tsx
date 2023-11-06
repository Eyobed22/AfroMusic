import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding-left: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #023047;
  color: #ffffff;
  position: fixed;
  z-index: 5;

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media (max-width: 760px) {
    z-index: 15;
    .logo {
      font-size: 1.2rem;
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <Nav>
      <div className="logo">Afro Music</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;