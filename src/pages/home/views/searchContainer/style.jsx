import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchContainer = styled.section`
  width: 100%;
  position: relative;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
