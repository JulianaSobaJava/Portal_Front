import styled, { css, keyframes } from "styled-components";

export const RegistrationContainer = styled.div`
  height: 100vh;
  positiion: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideIn = keyframes`
  from{
      left: 0;
      width:40%;
    }
    25%{
       left:5%;
       width:50%;
    }
    50%{
        left:25%;
        width:60%;

    }
    75%{
         left:45%;
         width:50%;

    }
    to{
        left:60%;
        width:40%;

    }

`;
const slideOut = keyframes`
  from{
      left: 60%;
      width:40%;
    }
    25%{
       left:45%;
       width:50%;
    }
    50%{
        left:25%;
        width:60%;

    }
    75%{
         left:5%;
         width:50%;

    }
    to{
        left:0;
        width:40%;

    }

`;

export const Content = styled.div`
  position: relative;
  flex-direction: column;
  height: 90%;
  border-radius: 15px;
  width: 94%;
  display: flex;
  border: 0.5px solid #ecf0f1;

  @media (max-width: 900px) {
    height: 100%;
    width: 100%;
  }

  &:before {
    content: " ";
    z-index: ${(props) => (props.animatioContent ? "8" : "8")};
    width: 40%;
    height: 100%;
    position: absolute;
    background-color: var(--main-color);
    border-radius: ${(props) =>
      props.animatioContent ? "15px 0 0 15px" : "0 15px 15px 0"};
    left: ${(props) => (props.animatioContent ? " 0" : "60%")};

    ${(props) =>
      props.animatioContent &&
      css`
        animation: ${slideOut} 1s;
      `}

    ${(props) =>
      !props.animatioContent &&
      css`
        animation: ${slideIn} 1s;
      `}

      @media (max-width: 900px) {
      position: absolute;
      top: -30%;
      width: 100%;
      height: 60%;
      border-radius-bottom: 50%;
      transform: rotate(-5deg);
    }
  }
`;
