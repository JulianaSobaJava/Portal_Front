import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;
export const FirstColumn = styled.div`
  text-align: center;
  width: 40%;
  position: relative;
  left: 60%;
  z-index: ${(props) => (props.animatioContent ? "-1" : "11")};
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
  position:relative;
  left:-40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition:.5s;
  z-index: ${(props) => (props.animatioContent ? "-1" : "7")};

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
  button {
    width: 10em;
    margin: 0 8px;
    padding: 10px 8px;
    color: var(--main-color);
    border: 1px solid var(--main-color);
    text-align: center;
    transition: 0.5s ease-in-out;
    background-color: transparent;

    &:hover {
      color: var(--white-color);
      background: var(--main-color);
    }
    
`;

export const LinkP = styled(Link)`
  margin: 1em 0px;
  font-size: 16px;
  color: #000;
`;
