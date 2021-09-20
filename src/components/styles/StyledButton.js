import styled from "styled-components";

export const StyledButton = `
  height: 6.44vh
  color: #FFFFFF;
  font-size: 16px;
  line-height: 26px;
  background-color: ${(props) => props.theme.background};
  :hover {
    background-color: ${(props) => props.theme.hoverBackground};
  }
  span {
    color: ${(props) => props.theme.coloredText};
  }
`;
