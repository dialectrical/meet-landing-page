import styled from "styled-components";

export const StyledButton = styled.button`
  height: 58px;
  width: ${(props) => props.theme.width};
  border: none;
  border-radius: 29px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-family: "Red Hat Display";
  line-height: 26px;
  font-weight: 900;
  background-color: ${(props) => props.theme.background};
  :hover {
    background-color: ${(props) => props.theme.hover};
  }
  span {
    color: ${(props) => props.theme.text};
  }
`;
