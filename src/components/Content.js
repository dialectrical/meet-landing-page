import React from "react";
import { StyledContentContainer } from "./styles/StyledContentContainer";
import { ContentImages } from "./ContentImages";

export const Content = () => {
  return (
    <StyledContentContainer>
      <ContentImages />
      <h4>Built for modern use</h4>
      <h3>Smarter meetings, all in one place</h3>
      <p>
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>
    </StyledContentContainer>
  );
};
