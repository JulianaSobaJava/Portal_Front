import styled from "styled-components";

export const FormikForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 48%;
  height: 98%;
  position: relative;

  button {
    width: 10em;
    margin: 6px 8px;
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

export const Content = styled.div`
  display: flex;
  width: 100%;
`;
