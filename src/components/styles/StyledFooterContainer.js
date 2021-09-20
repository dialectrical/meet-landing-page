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
    width: 350px;
    height: 88px;
    margin: 116px 125px 104px 165px;
    font-size: 40px;
    line-height: 44px;
    font-weight: 900;
    color: #fafafa;
    z-index: 1;
  }
  p {
    width: 340px;
    height: 78px;
    margin: 116px 0px 114px 0px;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    color: #fafafa;
    z-index: 1;
  }
  button {
    margin: 131px 165px 119px 92px;
    background-color: #855fb1;
    z-index: 1;
    span {
      color: #d9b8ff;
    }
    :hover {
      background-color: #b18bdd;
    }
  }
`;
