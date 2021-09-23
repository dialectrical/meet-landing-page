import styled from "styled-components";

export const StyledContentContainer = styled.div`
  margin-top: 34.44vh;
  marign-bottom: 20.44vh;
  h3 {
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    font-weight: 900;
    color: #28283d;
    margin: 1.78vh 34.51vw 3.56vh 34.58vw;
  }
  h4 {
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 4px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    color: #4d96a9;
    margin: 8.89vh 40.28vw 1.78vh 40.49vw;
  }
  p {
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    text-align: center;
    color: #87879d;
    margin: 3.56vh 31.25vw 0 31.25vw;
  }

  @media (max-width: 768px) {
    h3 {
      margin: 16px 161px 32px 162px;
    }
    h4 {
      margin: 48px 246px 16px 246px;
    }
    p {
      font-size: 16px;
      margin: 32px 98px 0 97px;
    }
  }

  @media (max-width: 414px) {
    width: 87.2vw;
    height: 175.47vw;
    margin: 79.47vw 6.4vw 46.93vw 6.4vw;
    h3 {
      font-size: 32px;
      line-height: 36px;
      margin: 6.4vw 0 8.53vw;
    }
    h4 {
      margin: 17.07vw 0 6.4vw 0;
    }
    p {
      margin: 8.53vw 6.4vw 46.93vw 6.4vw;
    }
  }
`;
