import styled from "styled-components";
import { Link } from "react-router-dom";

export const GoToLogin = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 14vh;
  margin-bottom: 0.2em;
  position: relative;
  color: var(--main-color);
  padding-top: 1%;

  span {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px 0 4%;
    font-size: 1.2em;
  }
`;
export const LinkLogin = styled(Link)`
  display: flex;
  color: var(--main-color);
  font-size: 1.8em;
  margin-right: 10px;
`;
export const LinkHome = styled(Link)`
  color: var(--main-color);
  font-size: 2em;
  font-weight: bold;
  margin-right: 4%;
`;
