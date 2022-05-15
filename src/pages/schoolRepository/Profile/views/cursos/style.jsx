import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding: 2% 1%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    li {
      background: #e4e4e4;
      padding: 10px;
      margin-top: 10px;
      cursor: pointer;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      div {
        width: 250px;
        height: 250px;
      }
      button {
        background: transparent;
      }
      & + li {
        margin-left: 20px;
      }
    }
  }
`;
