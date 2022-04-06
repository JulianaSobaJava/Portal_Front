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
  height: 90%;
  width: 100%;
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
export const SchoolForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 46%;
  height: 100%;
  border-left: 0.1px solid var(--grey-text-color);
  padding-left: 30px;
`;

export const Info = styled.div`
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 1em;
`;
export const FormGestor = styled.div`
  width: 46%;
  margin: 0 10px;
  padding-right: 30px;
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
export const DivForm = styled.div`
  width: 100%;
`;
