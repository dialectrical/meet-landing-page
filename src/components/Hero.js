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
        <StyledButton theme={primaryButton}>button 1</StyledButton>
        <StyledButton theme={secondaryButton}>button 2</StyledButton>
      </div>
    </section>
  );
};
