import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &:before {
    content: " ";
    z-index: 4;
    width: 50%;
    height: 100%;
    left: 66%;
    position: absolute;
    background-color: var(--main-color);

    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
export const FirstColumn = styled.div`
  text-align: center;
  width: 40%;
  position: relative;
  left: 80%;
  z-index: ${(props) => (props.animatioContent ? "-1" : "11")};

  @media (max-width: 1000px) {
    width: 100%;
    left: 0;
    padding: 30px 0;
    background-color: var(--main-color);
  }
  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: #fff;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 26px;
    text-transform: capitalize;
    font-weight: bold;
    color: #fff;
  }
`;

export const LinkButton = styled(Link)`
  width: 10em;
  padding: 10px 8px;
  color: var(--white-color);
  border: 1px solid var(--white-color);
  text-align: center;
  transition: 0.5s ease-in-out;

  &:hover {
    color: var(--main-color);
    background: var(--white-color);
  }
`;
export const SecondColumn = styled.div`
  width: 100%;
  left: -34%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;
  z-index: ${(props) => (props.animatioContent ? "-1" : "7")};

  @media (max-width: 1000px) {
    left: 0;
    height: 54%;
    padding: 1% 0;
  }

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
  }
`;
export const LinkLogo = styled(Link)`
  position: absolute;
  left: 80%;
  bottom: 300%;
  z-index: 8;
  font-size: 50px;
  cursor: pointer;
  color: var(--white-color);
`;

export const LinkP = styled(Link)`
  margin: 1em 0px;
  font-size: 16px;
  color: #000;
`;

export const FormikForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 96%;
  height: 98%;
  position: relative;

  @media (max-width: 1000px) {
    height: 90%;
  }
`;
