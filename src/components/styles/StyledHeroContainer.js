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
    height: 637px;
    .left {
      width: 394px;
      height: 303px;
      flex-basis: 50%;
      order: 1;
    }
    .right {
      width: 394px;
      height: 303px;
      flex-basis: 50%;
      order: 2;
    }
    h2 {
      width: 339px;
      height: 96px;
      font-size: 48px;
      margin: 0 59px 48px 59px;
    }
    p {
      width: 457px;
      height: 52px;
      font-size: 16px;
      margin: 24px 0 32px 0;
    }
  }
`;
