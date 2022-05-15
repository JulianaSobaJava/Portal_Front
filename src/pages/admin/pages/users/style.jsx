import styled from "styled-components";

export const ContentBody = styled.div`
  padding: 10px 20px;
`;
export const ContentFirstChild = styled.div`
  width: 100%;
  h3 {
    font-weight: 100;
  }
`;

export const ContentSecondChild = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 10px;

  button {
    padding: 6px 10px;
    background-color: var(--main-color);
    border-radius: 20px;
    color: #000;
  }
`;

export const Input = styled.div`
  padding: 10px;
  width: 300px;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  background-color: #fff;
  box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.4);
  input {
    padding: 0 2px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  button {
    & + button {
      margin-left: 10px;
    }
  }
`;
export const UserTable = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
