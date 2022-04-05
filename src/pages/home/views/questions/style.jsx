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

  span {
    position: absolute;
    top: 2%;
    right: 3%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const QuestionContent = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
`;

export const QuestionImg = styled.div`
  width: 40%;
  height: 90%;
  position: relative;
  margin-left: 2em;
  background-color: aqua;

  img {
    width: 100%;
    height: 100%;
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

  label {
    width: 64%;
    display: flex;
    justify-content: space-around;
  }
`;

export const QuestionLink = styled(Link)`
  color: var(--main-color);
`;
