import React from "react";
import heroLeft from "../img/image-hero-left.png";
import heroRight from "../img/image-hero-right.png";
import { StyledHeroContainer } from "./styles/StyledHeroContainer";
import { StyledHeroContainerContent } from "./styles/StyledHeroContainerContent";
import { StyledButton } from "./styles/StyledButton";
import { Theme } from "./Theme";

export const Hero = () => {
  const { primaryButton, secondaryButton } = Theme;
  return (
    <StyledHeroContainer>
      <img src={heroLeft} className="left" />
      <StyledHeroContainerContent>
        <h2>Group Chat for Everyone</h2>
        <p>
          Meet makes it easy to connect with others face-to-face virutally and
          collaborate across any device
        </p>
        <StyledButton theme={primaryButton} style={{ marginRight: "16px" }}>
          Download <span>v1.3</span>
        </StyledButton>
        <StyledButton theme={secondaryButton}>What is it?</StyledButton>
      </StyledHeroContainerContent>
      <img src={heroRight} className="right" />
    </StyledHeroContainer>
  );
};
