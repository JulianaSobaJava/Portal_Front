import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  position: relative;
`;

export const Content = styled.div`
  width: 80%;
  background-color: blue;
  height: 60vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  button {
    position: absolute;
    z-index: 1;
    top: 80%;
    left: 4%;
    background-color: rgba(0, 0, 0, 0.2);
    padding: 2%;
    color: #fff;
    border-radius: 40px;
  }
`;
