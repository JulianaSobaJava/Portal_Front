import styled from "styled-components";
import { Link } from "react-router-dom";

export const RandomSchools = styled.section`
  width: 100%;
  padding: 1% 6%;

  span {
    color: var(--main-color);
  }

  h4 {
    margin: 30px 0 10px 2%;
  }
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
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
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
