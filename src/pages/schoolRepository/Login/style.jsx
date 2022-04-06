import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainSection = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div`
  width: 20%;
  height: 50vh;
  margin: 0 0 0 2%;
  padding: 2% 0 0 1%;
  position: relative;
  text-align: left;

  h2 {
    margin: 1% 0;
  }

  p {
    padding: 0 5% 0 0;
  }
`;
export const LinkButton = styled(Link)`
  width: 10em;
  margin: 0 8px;
  padding: 10px 8px;
  color: var(--white-color);
  border: 1px solid var(--white-color);
  text-align: center;
  transition: 0.2s ease-in-out;
  position: relative;
  left: 38%;

  &:hover {
    color: var(--main-color);
    background: var(--white-color);
  }
  @media (max-width: 1110px) {
    border: none;
    padding: 0;
  }
`;
export const Form = styled.div`
  width: 28%;
  height: 50vh;
  margin: 0 1%;
  border: 1px solid;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2%;
`;
export const Sign = styled.div`
  width: 28%;
  height: 50vh;
  border: 1px solid #ecf0f1;
  margin: 0 2% 0 0;
  padding: 2% 1% 0 1%;
  background: var(--main-color);
  border-radius: 20px;
  position: relative;
  text-align: left;

  h2 {
    margin: 1% 0;
    color: var(--white-color);
  }

  p {
    padding: 0 8% 0 0;
    color: var(--white-color);
  }

  div {
    margin-top: 20px;
    width: 100%;
    height: 24vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    position: relative;

    img {
      width: 250px;
      height: 250px;
    }
  }
`;
export const LinkP = styled(Link)`
  margin: 1em 0px;
  font-size: 16px;
  color: #000;
`;
