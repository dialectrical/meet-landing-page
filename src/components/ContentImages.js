import React from "react";
import { StyledImageContainer } from "./styles/StyledImageContainer";
import img1 from "../img/image-woman-in-videocall.jpg";
import img2 from "../img/image-women-videochatting.jpg";
import img3 from "../img/image-men-in-meeting.jpg";
import img4 from "../img/image-man-texting.jpg";

export const ContentImages = () => {
  return (
    <StyledImageContainer>
      <img
        src={img1}
        alt="Image of a woman sitting in a kitchen with her head propped on her hand smiling at a laptop"
      />
      <img src={img2} alt="Image of three elderly women viewing a smartphone" />
      <img
        src={img3}
        alt="Image of a man speaking to someone on a video call on his laptop"
      />
      <img
        src={img4}
        alt="Image of a man holding a smartphone and smiliing at it"
      />
    </StyledImageContainer>
  );
};
