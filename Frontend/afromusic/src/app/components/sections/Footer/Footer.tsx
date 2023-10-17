import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #f2f2f2;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #888;
`;

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => (
  <FooterContainer>
    <FooterText>{text}</FooterText>
  </FooterContainer>
);

export default Footer;