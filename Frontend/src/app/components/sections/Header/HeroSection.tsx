import React from "react";
import styled from "@emotion/styled";
import heroImage from "../../../../assets/images/Musicians.jpg";
import StyledButton from "../../../styledComponents/StyledButton";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #392d69, #b57bee);

  @media (max-width: 768px){
    height: 50rem;
    width: 100vw;
  }
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
    margin-top: 150px;
  }
`;

const HeroImage = styled.img`
  width: 50%;
  height: 400px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 80%;
    height: 250px;
  }
`;

const ButtonContainer = styled.div`
  padding-top: 40px;
  @media (max-width: 768px) {
    padding-top: 20px;
  }
`;

const handleSmoothScroll = (targetId: string) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroText>
          <h1>Welcome to Afro Music</h1>
          <p>Discover the world of Songs</p>
          <ButtonContainer>
            <StyledButton
              onClick={() => handleSmoothScroll('songList')}
              text="Get Started"
              color="#023047"
            />
          </ButtonContainer>
        </HeroText>
        <HeroImage src={heroImage} alt="Hero image"></HeroImage>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
