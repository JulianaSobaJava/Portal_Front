import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 10vh 100vh;
  grid-template-areas:
    "sidebar navbar"
    "sidebar main";
`;
export const Sidebar = styled.div`
  height: 100vh;
  width: 20%;
  position: relative;
  left: ${(props) => (props.status ? "0" : "-20%")};
  grid-area: sidebar;
  position: fixed;
  background-color: var(--main-color);
  transition: 0.5s all;
`;
export const MainSection = styled.div`
  width: ${(props) => (props.status ? "100%" : "125%")};
  height: 100vh;
  margin-top: 8vh;
  grid-area: main;
  position: relative;
  left: ${(props) => (props.status ? "0" : "-25%")};
  transition: 0.5s all;
  padding-top: 2%;
`;

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 2% 5%;
`;
export const Info = styled.div`
  margin-right: 40px;
  display: flex;
  padding: 1% 1%;
  height: 20%;
  border: 1px solid var(--grey-text-color);
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.6);
`;

export const First = styled.span``;
export const Second = styled.span`
  margin-left: 10px;
  width: 150px;
  height: 150px;
  padding: 2%;
  border-radius: 100%;
  border: 3px solid var(--main-color);
  background-color: var(--white-color);

  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
`;
