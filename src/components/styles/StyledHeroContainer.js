import styled from "styled-components";

export const StyledHeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 39.78vh;
  width: 100%;
  img {
    height: 33.67vh;
  }
  .left {
    margin: -5.33vh 0 0 -2.22vw;
  }
  .right {
    margin: 0 -2.22vw 0 0;
  }
  h2 {
    margin: 0vh 3.29vw 3.77vh 3.29vw;
    font-size: 64px;
    line-height: 64px;
    font-weight: 900;
    color: #28283d;
    width: 30.9vw;
  }
  p {
    margin: 0;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    color: #87879d;
    margin-bottom: 3.56vh;
    width: 37.15vw;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: 62.21vh;
    .left {
      width: 51.30vw;
      height: 29.59vh;
      margin: 0 0 0 -3.39vw;
      flex-basis: 50%;
      order: 1;
    }
    .right {
      width: 51.30vw;
      height: 29.59vh;
      margin: 0 -3.39vw 0 0;
      flex-basis: 50%;
      order: 2;
    }
    h2 {
      width: 49.14vw;
      height: 9.38vh;
      font-size: 48px;
      margin: 0 7.68vw 4.69vh 7.68vw;
    }
    p {
      width: 59.51vw;
      height: 5.08vh;
      font-size: 16px;
      margin: 3.34vh 0 3.13vh 0;
    }
  }
`;
