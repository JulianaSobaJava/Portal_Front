import styled from "styled-components";
import mainImage from "../../../assets/image/mainImage.jpg";

export const AboutPortal = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--grey-background);

  h1 {
    font-size: 2em;
    margin: 0 0 8%;
  }
`;

export const Row = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  height: 100%;
  width: 100%;
`;

export const RowGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;

  div {
    width: 90%;
    height: 96%;
    background-image: url(${mainImage});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
export const RowColGroup = styled.div`
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  height: 50vh;
  width: 100%;
  flex-wrap: wrap;

  div {
    height: 40%;
    width: 20%;
    margin: 0.2em 0.8em;
    background-color: aqua;
  }
`;
