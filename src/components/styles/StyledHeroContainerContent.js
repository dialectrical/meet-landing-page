import styled from "styled-components";

export const StyledHeroContainerContent = styled.div`
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
  @media (max-width: 414px) {
    width: 87.2vw;
    height: 94.4vw;
    margin: 12.8vw 6.4vw 71.47vw 6.4vw;
    flex-bassis: 100%;
    order: 3;
  }
`;
