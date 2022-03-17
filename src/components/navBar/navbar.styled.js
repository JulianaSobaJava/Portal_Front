import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";

export const Header = styled.header`
  width: 100%;
  height: 9vh;
  position: fixed;
  z-index: 100;
  transition: background 0.3s ease-in-out;
  padding: ${(props) => (props.color ? "2% 4%" : "1% 4%")};
  ${(props) =>
    !props.color &&
    `
  background:var(--white-color);
  color: var(--black-color);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);  
  `}

  @media (min-width: 360px) {
   width:100%;
   overflow-X
  }
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavBarLogo = styled(Link)`
  font-size: 38px;
  color: ${(props) =>
    props.color ? "var(--white-color)" : "var(--black-color)"};

  @media (min-width: 900px) {
    font-size: 30px;
  }
`;
export const NavItemsContainer = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1110px) {
    background: #f44336;
    position: fixed;
    display: block;
    color: #fff;
    width: 300px;
    height: 100vh;
    z-index: 2;
    top: 0;
    padding-left: 3%;
    right: -300px;
    text-align: left;
    transition: 1s;

    ul {
      padding: 30px 0 10px;
      @media (max-width: 1110px) {
        padding: 30px;
      }
    }
  }

  li {
    display: inline-block;
    list-style: none;
    padding: 8px 14px;
    position: relative;
    text-decoration: none;
    font-size: 18px;

    @media (max-width: 1110px) {
      display: block;
      color: #fff;
    }
  }
`;

export const NavLink = styled(Link)`
  color: ${(props) =>
    props.color ? "var(--white-color)" : "var(--black-color)"};
`;
export const NavLinkRegist = styled(Link)`
  color: ${(props) =>
    props.color ? "var(--white-color)" : "var(--black-color)"};
  border: 1px solid var(--main-color);
  padding: 10px;
  @media (max-width: 1110px) {
    border: none;
    padding: 0;
  }
`;

export const Login = styled.div`
  padding: 0.1em 0.2em;
  border-radius: 4px;
  margin: 0 0.8em;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) =>
    props.color ? "var(--white-color)" : "var(--black-color)"};
`;

export const SignSchool = styled(Link)`
  margin: 0 0.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 0.2em;
  border-radius: 0.3em;
  border: 1px solid
    ${(props) => (props.color ? "var(--white-color)" : "var(--main-color)")};
  color: ${(props) =>
    props.color ? "var(--white-color)" : "var(--main-color)"};
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  border-radius: 50%;
  position: relative;
`;
export const FaBar = styled(Icons.FaBars)`
  display: none;
  @media (max-width: 1110px) {
    display: block;
    color: #000;
    margin: 10px;
    font-size: 1.4em;
    cursor: pointer;
  }
    @media (min-width: 360px) {
    display: block;
   background:#fff;
  }
`;

export const FaTime = styled(Icons.FaTimes)`
  display: none;
  @media (max-width: 1110px) {
    display: block;
    padding: 10px 10px 0 10px;
    color: var(--white-color);
    margin: 20px 10px 0 10px;
    font-size: 2em;
    cursor: pointer;
  }

  @media (min-width: 360px) {
    display: block;
   background:#fff;
  }
`;
