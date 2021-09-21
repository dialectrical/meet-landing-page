import styled from "styled-components";

export const StyledFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 34.22vh;
  margin-top: 20.44vh;
  img {
    width: 100%;
    height: 34.22vh;
    position: absolute;
    z-index: -1;
  }
  div {
    position: absolute;
    height: 34.22vh;
    width: 100vw;
    position: absolute;
    background-color: #4d96a9;
    opacity: 0.9;
    z-index: 0;
  }
  h3 {
    width: 34.3vw;
    height: 9.77vh;
    margin: 12.89vh 8.68vw 11.56vh 11.46vw;
    font-size: 40px;
    line-height: 44px;
    font-weight: 900;
    color: #fafafa;
    z-index: 1;
  }
  p {
    width: 23.61vw;
    height: 8.67vh;
    margin: 8.06vw 0 7.82vw 0;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    color: #fafafa;
    z-index: 1;
  }
  button {
    margin: 14.56vh 11.46vw 13.22vh 6.39vw;
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