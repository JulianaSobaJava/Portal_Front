import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";

export const Header = styled.header`
  height: 9vh;
  position: fixed;
  inset: 0;
  z-index: 8;
  width: 100%;
  transition: background 0.3s ease-in-out;
  padding: ${(props) => (props.color ? "2% 3%" : "1% 3%")};
  ${(props) =>
    !props.color &&
    `
  background:var(--white-color);
  color: var(--black-color);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);  
  `}
`;

export const Navbar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavBarLogo = styled(Link)`
  font-size: 1.3em;
  color: ${(props) =>
    props.color ? "var(--white-color)" : "var(--black-color)"};

  @media (max-width: 282px) {
    font-size: 0.2em;
  }

  @media (max-width: 820px) {
    font-size: 0.8em;
  }
  @media (max-width: 912px) {
    font-size: 1em;
  }

  @media (max-width: 1440px) {
    font-size: 1.1em;
  }
`;
export const NavItemsContainer = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1110px) {
    background: var(--main-color);
    position: fixed;
    display: block;
    color: #fff;
    width: 400px;
    height: 100%;
    z-index: 2;
    top: 0;
    padding-left: 3%;
    right: -400px;
    text-align: left;
    transition: 1s;

    ul {
      padding: 30px 0 10px;
      @media (max-width: 1110px) {
        padding: 30px;
      }
    }
  }

  @media (max-width: 440px) {
    background: var(--main-color);
    position: fixed;
    display: block;
    color: #fff;
    width: 200px;
    height: 100%;
    z-index: 2;
    top: 0;
    padding-left: 3%;
    right: -200px;
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
export const ButtonLogin = styled.button`
  background: transparent;
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

  @media (max-width: 360px) {
    display: block;
  }
`;
