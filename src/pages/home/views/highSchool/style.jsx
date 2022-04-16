import styled from "styled-components";

export const HighSchoolSection = styled.section`
  width: 100%;
  height: 80vh;
  padding: 2% 3%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
`;

export const ImageGroup = styled.div`
  width: 70%;
  height: 100%;
  padding: 0 4%;
  position: relative;
`;
export const Img = styled.img`
  position: absolute;

  ${(props) =>
    props.img1 &&
    `
    left:50%;
    top: 45%;
     z-index: 2;
  `}
  ${(props) =>
    props.img2 &&
    `
    top: 26%;
    left: 28%;
    z-index: 1;
  `}
    ${(props) => props.img3 && `top: 8%;`}

  &:hover {
    z-index: 8;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

export const DescriptionHighSchoolSection = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 2% 0;
    color: #232332;
    font-size: 40px;
    font-weight: 500;
  }
  > p {
    margin: 2% 0;
    font-size: 20px;
    color: #232332;
    line-height: 1.5;
  }
`;
