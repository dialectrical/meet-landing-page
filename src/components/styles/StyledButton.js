import styled from "styled-components";

export const StyledButton = styled.button`
  height: 6.44vh;
  width: ${(props) => props.theme.width};
  border: none;
  border-radius: 29px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  line-height: 26px;
  background-color: ${(props) => props.theme.background};
  :hover {
    background-color: ${(props) => props.theme.hover};
  }
  span {
    color: ${(props) => props.theme.text};
  }
`;
