import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  display: flex;
  margin-top: 10px;
  padding: 0 10%;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
`;
export const ListItem = styled.li`
  display: flex;

  padding: 3% 0;
  background-color: var(--grey-text-color);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  position: relative;

  .active {
    &::after {
      content: "";
      position: absolute;
      top: 100%;
      width: 100%;
      left: 0;
      height: 20px;
      background-color: var(--grey-text-color);
      z-index: 1;
    }
  }

  & + li {
    margin-left: 10px;
  }
`;

export const LinkItem = styled(Link)`
  color: var(--white-color);
  margin: 0 15px;
`;
