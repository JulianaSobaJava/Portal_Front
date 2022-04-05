import styled from "styled-components";
import { Link } from "react-router-dom";
import wrapper from "../../../../assets/image/mainImage.jpg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(4, 4, 20, 0.5), rgba(4, 4, 20, 0.5)),
    url(${wrapper});
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  width: 50%;
  height: 40vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 12%;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 62px;
    margin-top: 3%;
  }

  p {
    margin: 10px 0 20px;
    font-size: 19px;
    color: #fff;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 5em;
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
