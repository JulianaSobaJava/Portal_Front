import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.aside`
  height: 100vh;
  width: 18%;
  display: flex;
  justify-content: flex-start;
`;

export const Content = styled.div`
  height: 100%;
  width: 90%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  padding: 20px 2% 0 2%;
`;
export const Nav = styled.nav`
  margin-top: 20px;
  margin-bottom: 22vh;
  h4 {
    margin-top: 10px;
    margin-bottom: 4px;
    color: #a0a0a0;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const LinkAside = styled(Link)`
  font-size: 16px;
  color: #232332;
  line-height: 1.5;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 4px 0;

  &:hover {
    background-color: var(--main-color);
    border-radius: 8px;
  }

  div {
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 6px;
    margin-left: 4px;
  }

  li {
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  color: red;
  width: 100%;
  text-align: left;
  padding: 0 4%;
  font-weight: 600;
`;
