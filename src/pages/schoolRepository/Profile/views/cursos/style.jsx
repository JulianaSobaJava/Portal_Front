import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20px;
  padding: 2% 1%;

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      background: #e4e4e4;
      padding: 10px;
      margin-top: 10px;
      cursor: pointer;
      border-radius: 30px;

      button {
        background: transparent;
      }
      & + li {
        margin-left: 20px;
      }
    }
  }
`;
