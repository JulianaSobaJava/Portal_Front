import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchContainer = styled.section`
  width: 100%;
  position: relative;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 280px) {
    width: 100%;
  }
`;
export const Search = styled.div`
  padding: 3em 4em;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: -12%;
  width: 80%;
  height: 50vh;
  background-color: var(--main-color);

  @media (max-width: 1280px) {
    width: 90%;
    padding: 2em 4em;
  }

  @media (max-width: 1024px) {
    padding: 1em 4em;
  }

  @media (max-width: 780px) {
    width: 100%;
    padding: 2em 1em;
    height: 50vh;
  }

  h1 {
    font-size: 24px;
    text-align: left;
  }
`;
export const InputSearch = styled.div`
  margin-top: 10px;
  background: var(--white-color);
  color: var(--grey-text-color);
  height: 60px;
  border-radius: 50px;
  padding: 0 1.2em;
  display: flex;
  align-items: center;
  margin-bottom: 3em;

  @media (max-width: 1024px) {
    margin-bottom: 1em;
  }

  input {
    width: 80%;
    padding: 0.4em;
    font-size: 1em;
  }
`;

export const FilterOPtions = styled.div`
  padding: 0 0.4em;
  flex-wrap: wrap;
  display: flex;
  width: 80%;
`;

export const FiltersGroups = styled.div`
  background: ${(props) =>
    props.click ? "rgba(0, 0,0,0.2)" : "rgba(2, 7,28,0.4)"};
  position: relative;
  height: 40px;
  margin: ${(props) => (props.click ? ".8em .2em" : ".8em .2em")};
  border-radius: 20px;
  padding: 0.2em 0.6em;
  display: flex;
  align-items: center;
  transition: all 1s ease;
  cursor: pointer;

  @media (max-width: 780px) {
    height: 20px;
    padding: 1em 0.8em;
    font-size: 12px;
  }

  input {
    display: ${(props) => (props.click ? "flex" : "none")};
    overflow: visible;
  }
  label {
    cursor: pointer;
  }
`;
export const LinkExplore = styled(Link)`
  color: var(--black-color);
  padding: 0 0.6em;
  display: flex;
  align-items: center;
  position: relative;
  top: 50%;

  @media (max-width: 1280px) {
    top: 30%;
  }
  @media (max-width: 1024px) {
    top: 5%;
  }
`;
