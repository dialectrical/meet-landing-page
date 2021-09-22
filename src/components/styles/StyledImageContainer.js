import styled from "styled-components";

export const StyledImageContainer = styled.div`
  margin: 0 10.42vw 0 10.42vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  img {
    width: 255px;
    height: 242px;
    border-radius: 8px;
    margin: 0 1.04vw 0 1.04vw;
  }
  @media (max-width: 768px) {
    img {
      width: 164px;
      height: 156px;
    }
  }
  @media (max-width: 375px) {
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0;
    img {
      flex-basis: 50%;
      width: 151px;
      height: 143px;
      margin: 8.75px -8.5px 8.75px -8.5px;
    }
  }
`;
