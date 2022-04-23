import styled from "styled-components";
import image from "../../../assets/image/teste.jpeg";

export const Container = styled.div`
  width: 100%;
  padding: 2% 4%;
  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  text-align: left;

  p {
    margin: 1% 2%;
    font-size: 18px;
    color: #232332;
    line-height: 1.5;
  }
`;
export const Banner = styled.div`
  position: absolute;
  width: 100%;
  height: 50vh;
  z-index: 1;
  top: 0;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
`;
export const TesteQuestions = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2% 1%;

  > div {
    width: 60%;
    padding: 2% 1%;

    h3 {
      margin: 1.5% 0;
    }

    ul {
      width: 100%;
      padding: 2% 3%;
      transition: all 0.4s;

      li {
        width: 100%;
        border: 1px solid #ededed;
        cursor: pointer;

        button {
          width: 100%;
          height: 100%;
          padding: 2% 1%;
          text-align: left;
          background: transparent;

          &:hover {
            background-color: var(--main-color);
            transition: 0.5s background;
            color: #fff;
            transform: scale(1);
          }
        }

        & + li {
          margin-top: 10px;
        }
      }
    }
  }
`;
