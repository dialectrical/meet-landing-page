import React from "react";
import { StyledFooterContainer } from "./styles/StyledFooterContainer";
import { StyledButton } from "./styles/StyledButton";
import imageFooter from "../img/image-footer.jpg";
import { Theme } from "./Theme";

export const Footer = () => {
  const primaryButton = Theme;
  return (
    <StyledFooterContainer>
      <img src={imageFooter} />
      <div />
      <h3>Experience more together</h3>
      <p>
        Stay connected with reliable HD meetings and unlimited one-on-one and
        group video sessions.
      </p>
      <StyledButton
        theme={primaryButton}
        style={{ backgroundColor: "#855FB1" }}
      >
        Download <span>v1.3</span>
      </StyledButton>
    </StyledFooterContainer>
  );
};
