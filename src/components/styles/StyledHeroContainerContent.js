import styled from "styled-components";

export const StyledHeroContainerContent = styled.section`
  width: 37.5vw;
  height: 33.78vh;
  margin: 0 6.11vw 0 6.11vw;
  text-align: center;
  @media (max-width: 768px) {
    width: 59.51vw;
    height: 25.59vh;
    margin: 7.03vh 20.31vw 28.03vh 20.18vw;
    flex-basis: 100%;
    order: 3;
  }
  @media (max-width: 375px) {
    width: 327px;
    height: 354px;
    margin: 48px 24px 268px 24px;
    flex-bassis: 100%;
    order: 3;
  }
`;
