// StyleBurger.tsx
import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

interface StyleBurgerProps {
  open: boolean;
}

const StyleBurger = styled.div<StyleBurgerProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column nowrap;
  cursor: pointer;

  display: none;

  @media (max-width: 760px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyleBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyleBurger>
      {open && <div style={{ height: "55px" }} />}{" "}
      {/* Spacer for the open menu */}
      <RightNav open={open} />
    </>
  );
};

export default Burger;
