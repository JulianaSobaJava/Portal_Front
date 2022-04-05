import styled from "styled-components";
import { Link } from "react-router-dom";

export const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 6%;
  top: 0;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  padding-top: 4%;
  padding-bottom: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
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
