import styled from "styled-components";

export const Infomation = styled.div`
  width: 30%;
  height: 90%;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 3em 3em;
  background-color: var(--main-color);
  color: #fff;

  h2 {
    margin-bottom: 10px;
  }

  div {
    width: 90%;
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 300px;
      height: 300px;
    }
  }
`;
