import React from "react";
import { StyledFooterContainer } from "./styles/StyledFooterContainer";
import imageFooter from "../img/image-footer.jpg";

export const Footer = () => {
  return (
    <StyledFooterContainer>
      <img src={imageFooter} />
      <div />
    </StyledFooterContainer>
  );
};
