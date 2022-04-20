import styled from "styled-components";

export const SchoolBanner = styled.div`
  width: 100%;
  top: -1%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  position: absolute;
`;
export const SchoolSearch = styled.div`
  justify-content: space-between;
  margin-top: 2em;
  width: 80%;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16vh;
  width: 80%;
  margin-top: 2em;
  border: 1px solid #efefef;
  border-radius: 10px;
`;

export const InputContainer = styled.div`
  margin: 0 auto;
  width: 96%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const InputContent = styled.div`
  height: 50%;
  width: 32%;
  background-color: var(--white-color);
  padding-left: 10px;
  border: 1px solid #efefef;
`;
export const Input = styled.input`
  height: 100%;
  width: 100%;
`;

export const SchoolContent = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const SchoolContentSection = styled.div`
  width: 70%;
  height: 100%;
  background-color: var(--grey-background-second);
`;
export const TypeView = styled.div`
  width: 100%;
  height: 20vh;

  div {
    display: flex;
    height: 14vh;
    align-items: center;
    padding-left: 1em;
    background-color: var(--grey-background);
  }
  button {
    border: 1px solid var(--grey-dark);
    background-color: rgb(22, 22, 109);
    color: var(--white-color);
    padding: 1.1em;
    border-radius: 50px;
    margin-top: 0;
    margin-left: 1em;
    display: flex;
    align-items: center;
  }
`;
export const Views = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
