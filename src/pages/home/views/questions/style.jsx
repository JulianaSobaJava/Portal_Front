import styled from "styled-components";
import { Link } from "react-router-dom";

export const Question = styled.section`
  width: 100%;
  height: 70vh;
  padding: 0 5%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0;
    height: 100%;
    margin-bottom: 10px;
  }

  span {
    position: absolute;
    top: 2%;
    right: 3%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 768px) {
      top: 0;
      position: relative;
      width: 100%;
      height: 50px;
      right: 0;
    }

    img {
      @media (max-width: 768px) {
        height: 100%;
      }
    }
  }
`;

export const QuestionContent = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 2%;
    background-color: var(--main-color);
  }
`;

export const QuestionImg = styled.div`
  width: 40%;
  height: 90%;
  position: relative;
  margin-left: 2em;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  img {
    width: 100%;
    height: 300px;
  }
`;

export const QuestionDescription = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 2em;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 3% 0;
  }

  h1 {
    @media (max-width: 768px) {
      font-size: 26px;
      text-align: left;
    }
  }

  label {
    width: 64%;
    display: flex;
    justify-content: space-around;

    strong {
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
`;

export const QuestionLink1 = styled(Link)`
  color: var(--main-color);

  @media (max-width: 768px) {
    color: var(--main-color);
    font-size: 14px;
    margin-top: 10px;
    background-color: var(--white-color);
    padding: 10px;
    border-radius: 20px;
  }
`;

export const QuestionLink = styled(Link)`
  color: var(--main-color);

  @media (max-width: 768px) {
    display: none;
  }
`;
