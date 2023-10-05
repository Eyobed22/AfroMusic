import React from 'react';
import styled from '@emotion/styled';
import heroImage from '../../assets/images/Musicians.jpg'

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: #f7f7f7; */
  background: linear-gradient(to bottom, #392d69, #b57bee);
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  padding: 0 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const HeroText = styled.div`
  flex: 1;
  text-align: center;
  color: #ffffff;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 24px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const HeroImagePlaceholder = styled.div`
  width: 50%;
  height: 400px;
  background-color: #ddd;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const HeroImage = styled.img`
  width: 50%;
  height: 400px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <h1>Welcome to Afro Music</h1>
          <p>Discover the world of Songs</p>
        </HeroText>
        {/* <HeroImagePlaceholder /> */}
        <HeroImage src={heroImage} alt='Hero image'></HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};


export default HeroSection;