import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  &:before {
    content: " ";
    z-index: 4;
    width: 45%;
    height: 100%;
    position: absolute;
    background-color: var(--main-color);
    animation: ${slideOut} 0.8s;
  }
`;

export const FirstColumn = styled.div`
  text-align: center;
  width: 40%;
  z-index: ${(props) => (props.animatioContent ? "5" : "5")};
  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: #fff;
  }

  h3 {
    font-size: 26px;
    text-transform: capitalize;
    font-weight: bold;
    color: #fff;
  }

  button {
    width: 10em;
    margin: 0 8px;
    padding: 10px 8px;
    color: var(--white-color);
    border: 1px solid var(--white-color);
    text-align: center;
    transition: 0.5s ease-in-out;
    background-color: transparent;

    &:hover {
      color: var(--main-color);
      background: var(--white-color);
    }
  }
`;
export const SecondColumn = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: ${(props) => (props.animatioContent ? "11" : "2")};

  h3 {
    font-size: 26px;
    text-transform: capitalize;
    font-weight: bold;
    color: var(--main-color);
  }
  p {
    color: #d2d2d3;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
  }
`;
export const LinkLogo = styled(Link)`
  position: absolute;
  left: 1%;
  top: 2%;
  font-size: 50px;
  cursor: pointer;
  color: var(--white-color);
`;
