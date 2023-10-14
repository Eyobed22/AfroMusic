// RightNav.tsx
import React from "react";
import styled from "styled-components";

interface RightNavProps {
  open: boolean;
}

const Ul = styled.ul<RightNavProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;

  li {
    padding: 18px 10px;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: #023047;
    }
  }

  @media (max-width: 760px) {
    flex-flow: column nowrap;
    background-color: #002538;
    position: fixed;
    top: 55px;
    right: ${({ open }: RightNavProps) => (open ? "0" : "-300px")};
    height: calc(100vh - 55px);
    width: 300px;
    padding-top: 3.5rem;
    transition: right 0.3s ease-in-out;
    z-index: 10; /* Add z-index to ensure the dropdown appears below the burger menu */

    li {
      color: #ffffff;
    }
  }
`;

const handleSmoothScroll = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const RightNav: React.FC<RightNavProps> = ({ open }) => {
  return (
    <Ul open={open}>
      <li onClick={() => handleSmoothScroll("songList")}>Song-List</li>
      <li onClick={() => handleSmoothScroll("viewStatistics")}>
        Afro-Music-Stat
      </li>
    </Ul>
  );
};

export default RightNav;