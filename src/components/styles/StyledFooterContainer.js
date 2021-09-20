import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1440px;
  height: 308px;
  margin-top: 184px;
  img {
    position: absolute;
    z-index: -1;
  }
  div {
    position: absolute;
    height: 308px;
    width: 100%;
    position: absolute;
    background-color: #4d96a9;
    opacity: 0.9;
    z-index: 0;
  }
  h3 {
    z-index: 1;
  }
  p {
    z-index: 1;
  }
  button {
    z-index: 1;
  }
`;
