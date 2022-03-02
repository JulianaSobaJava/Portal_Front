import styled from "styled-components";
import { Link } from "react-router-dom";

export const AsideLinks = styled.aside`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100vh;
  padding: 4% 4%;

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;

    li {
      height: 8vh;
      font-weight: 400;
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 0.2em;
      padding-left: 2%;
      border-bottom: 2px solid var(--main-color);
      cursor: pointer;
      color: var(--main-color);

  &:active{
    font-weight: bold;
    font-size: 1.1em;
    }
  }
`;
export const LinkNav = styled(Link)`
  color: var(--main-color);

  &:focus {
    font-weight: bold;
    font-size: 1.1em;
  }
`;

export const MainAbout = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const AboutPortal = styled.section`
  width: 70%;
  height: 100%;
  padding: 4% 5%;
  background-color: var(--grey-background);
`;
