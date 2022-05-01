import styled from "styled-components";

export const AllInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #ecf0f1;
  width: 100%;
  margin: 4px 0;
  padding: 4px 2px;
`;

export const FormGroup = styled.div`
  width: 100%;
`;

export const FieldInput = styled.input`
  background-color: #ecf0f1;
  height: 25px;
  width: 100%;
  border: none;
  margin: 8px;
  padding-left: 3px;
  position: relative;
  outline: none;
`;

export const FormikForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 55%;
  height: 98%;
  position: relative;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }
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
export const Select = styled.select`
  width: 50%;
  background-color: #ecf0f1;
  height: 25px;
  border: none;
  margin: 8px;
  padding-left: 3px;
  position: relative;
  outline: none;
`;
export const Error = styled.span`
  color: #b32e2e;
  font-size: 11px;
  min-height: 10px;
`;
