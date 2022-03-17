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
  height: 8vh;
  width: 60%;
  margin-top: 2em;
  background-color: var(--white-color);
  border-radius: 50px;

  div {
    margin: 0;
    width: 80%;
  }
  button {
    padding: 1.1em;
    border-radius: 50px;
    margin-top: 0;
    margin-left: 1em;
    display: flex;
    align-items: center;
    background: transparent;
  }
`;
export const Input = styled.input`
  height: 100%;
  width: 90%;
`;
export const SchoolContent = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const SchoolContentSection = styled.div`
  width: 62%;
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
`;
