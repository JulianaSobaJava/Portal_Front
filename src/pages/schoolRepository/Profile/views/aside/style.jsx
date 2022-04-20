import styled from "styled-components";

export const Container = styled.aside`
  width: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2% 1%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  margin-right: 10px;

  > div {
    & + div {
      margin-top: 20px;
    }
  }
`;
