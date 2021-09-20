import React from "react";
import { StyledImageContainer } from "./styles/StyledImageContainer";
import img1 from "../img/image-woman-in-videocall.jpg";
import img2 from "../img/image-women-videochatting.jpg";
import img3 from "../img/image-men-in-meeting.jpg";
import img4 from "../img/image-man-texting.jpg";

export const ContentImages = () => {
  return (
    <StyledImageContainer>
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
      <img src={img4} />
    </StyledImageContainer>
  );
};
