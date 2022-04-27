import styled, { css } from "styled-components";

export const HighSchoolSection = styled.section`
  width: 100%;
  height: 80vh;
  padding: 2% 3%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const ImageGroup = styled.div`
  width: 70%;
  height: 100%;
  padding: 0 4%;
  position: relative;

  @media (max-width: 1290px) {
    padding: 0;
  }

  @media (max-width: 1000px) {
    width: 100%;
    overflow-x: hidden;
  }
`;
export const Img = styled.img`
  position: absolute;

  @media (max-width: 1290px) {
    width: 400px;
  }

  @media (max-width: 1030px) {
    width: 300px;
  }

  @media (max-width: 1000px) {
    width: 350px;
  }

  @media (max-width: 450px) {
    width: 180px;
  }

  @media (max-width: 375px) {
    width: 150px;
  }

  ${(props) =>
    props.img1 &&
    css`
      left: 50%;
      top: 45%;
      z-index: 2;

      @media (max-width: 1290px) {
        left: 44%;
      }
    `}
  ${(props) =>
    props.img2 &&
    css`
      top: 26%;
      left: 28%;
      z-index: 1;

      @media (max-width: 1290px) {
        left: 24%;
      }
    `}
    ${(props) => props.img3 && `top: 8%;`}

  &:hover {
    z-index: 8;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);

    @media (max-width: 375px) {
      z-index: 4;
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
    }
  }
`;

export const DescriptionHighSchoolSection = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    background: yellow;
    width: 100%;
  }

  h2 {
    margin: 2% 0;
    color: #232332;
    font-size: 40px;
    font-weight: 500;

    @media (max-width: 450px) {
      font-size: 35px;
      margin: 0.5% 0;
    }

    @media (max-width: 375px) {
      font-size: 30px;
      margin: 1% 0;
    }
  }
  > p {
    margin: 2% 0;
    font-size: 20px;
    color: #232332;
    line-height: 1.5;

    @media (max-width: 1030px) {
      font-size: 0.8em;
    }

    @media (max-width: 450px) {
      font-size: 12px;
      margin: 1% 0;
    }
    @media (max-width: 375px) {
      font-size: 10px;
    }
  }
`;
