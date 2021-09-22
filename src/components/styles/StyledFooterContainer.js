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
  @media (max-width: 768px) {
    width: 100vw;
    height: 41.8vh;
    flex-direction: column;
    text-align: center;
    div {
      height: 41.8vh;
    }
    img {
      height: 41.8vh;
    }
    h3 {
      width: 59.5vw;
      height: 5.6vh;
      margin: 8.98vh 20.31vw 3.13vh 20.18vw;
    }
    p {
      width: 74.6vw;
      height: 5.08vhx;
      margin: 3.13vh 12.76vw 0 12.63vw;
    }
    button {
      margin: 3.9vh 37.5vw 0 37.37vw;
    }
  }

  @media (max-width: 375px) {
    width: 100vw;
    height: 428px;
    flex-direction: column;
    text-align: center;
    div {
      height: 428px;
    }
    img {
      height: 428px;
    }
    h3 {
      width: 327px;
      height: 72px;
      font-size: 32px;
      line-height: 36px;
      margin: 92px 24px 24px 24px;
    }
    p {
      width: 327px;
      height: 78px;
      margin: 24px 24px 32px 24px;
    }
    button {
      margin: 0 92px 0 90px;
    }
  }
`;
