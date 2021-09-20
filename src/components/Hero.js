import React from "react";
import { StyledButton } from "./styles/StyledButton";
import { Theme } from "./Theme";

export const Hero = () => {
  const { primaryButton, secondaryButton } = Theme;
  return (
    <section>
      <div>
        <h2>Group Chat for Everyone</h2>
        <p>subtitle</p>
        <StyledButton theme={primaryButton}>
          Download <span>v1.3</span>
        </StyledButton>
        <StyledButton theme={secondaryButton}>What is it?</StyledButton>
      </div>
    </section>
  );
};
