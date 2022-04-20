import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;
export const First = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2%;
  border: 1px solid #ededed;
  background: var(--main-color);
`;

export const Second = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;

  > div {
    margin: 10px 20px 10px 20px;
    padding: 2%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #ededed;
    background: var(--main-color);
  }
`;

export const Third = styled(Second)`
  display: flex;
  margin-bottom: 0 !important;
`;
