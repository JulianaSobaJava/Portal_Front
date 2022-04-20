import styled from "styled-components";
import mainImage from "../../../assets/image/mainImage.jpg";

export const AboutPortal = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--grey-background);

  h1 {
    font-size: 2em;
    margin: 0 0 4%;
  }
`;

export const Row = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 3em;
  height: 100%;
  width: 100%;
`;

export const RowValue = styled(Row)`
  flex-direction: column;

  > h3 {
    position: relative;
    left: -38%;
  }
`;
export const Tittle = styled.h3`
  margin: 2% 0;
  color: #232332;
  font-size: 30px;
  font-weight: 500;
`;
export const TittleValue = styled(Tittle)`
  font-size: 22px !important;
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  padding-left: 0.5%;
`;

export const Paragraphy = styled.p`
  margin: 2% 0;
  font-size: 18px;
  color: #232332;
  line-height: 1.5;
`;

export const FirstRow = styled.div``;

export const Image = styled.div`
  padding: 0 0 0 8%;
  display: flex;
  align-items: center;
`;

export const ImageRowTwo = styled.div`
  padding: 0 8% 0 0;
  display: flex;
  align-items: center;
`;

export const SecondtRow = styled.div``;
export const ThirdRow = styled.div`
  padding: 0 3%;
`;
export const RowGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  margin-bottom: 2em;

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
