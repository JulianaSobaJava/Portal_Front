import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

export const RandomSchools = styled.section`
  width: 100%;
  padding: 1% 6%;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Dropdown = styled.div`
  position: relative;
  margin-left: 10px;

  button {
    display: flex;
    background-color: transparent;

    h3 {
      color: var(--primaryColor);
    }
  }
`;
export const Icons = styled(FaAngleDown)`
  color: var(--primaryColor);
  font-size: 1.2em;
  margin-top: 3%;
`;

export const DropdownContent = styled.div`
  background-color: pink;
  display: ${(props) => (props.status ? "block" : "none")};
  position: absolute;
  z-index: 1;
`;

export const RandomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 4rem;
`;
export const BoxContent = styled.div`
  position: absolute;
  top: -100%;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  padding-top: 5rem;
  text-align: center;
  transition: all 0.3s linear;

  h3 {
    font-size: 1.4em;
    color: var(--white-color);
  }
  p {
    font-size: 0.8rem;
    color: var(--white-color);
    padding: 1rem 0;
  }
`;
export const Box = styled.div`
  height: 18em;
  flex: 1 1 16em;
  border: 1rem solid #fff;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &:hover ${BoxContent} {
    top: 0;
  }
`;

export const LinkButton = styled(Link)`
  width: 10em;
  margin: 0 8px;
  padding: 10px 8px;
  color: var(--white-color);
  border: 1px solid var(--main-color);
  text-align: center;
  transition: 0.5s ease-in-out;

  &:hover {
    color: var(--white-color);
    background: var(--main-color);
  }
  @media (max-width: 1110px) {
    border: none;
    padding: 0;
  }
`;
