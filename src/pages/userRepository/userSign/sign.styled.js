import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
`;

export const FirstColumn = styled.div`
  text-align: center;
  width: 40%;
  position: relative;
  z-index: ${(props) => (props.animatioContent ? "11" : "11")};
  p {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    color: #fff;
  }

  h3 {
    font-size: 26px;
    text-transform: capitalize;
    font-weight: bold;
    color: #fff;
  }

  button {
    width: 10em;
    margin: 0 8px;
    padding: 10px 8px;
    color: var(--white-color);
    border: 1px solid var(--white-color);
    text-align: center;
    transition: 0.5s ease-in-out;
    background-color: transparent;

    &:hover {
      color: var(--main-color);
      background: var(--white-color);
    }
  }
`;
export const SecondColumn = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: ${(props) => (props.animatioContent ? "11" : "2")};

  h3 {
    font-size: 26px;
    text-transform: capitalize;
    font-weight: bold;
    color: var(--main-color);
  }
  p {
    color: #d2d2d3;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
  }
`;
export const SuccessMessage = styled.span`
  text-align: center;
  color: #00bb00;
  background-color: #bbffbe;
  padding: 6px;
  border-radius: 4px;
  display: none;
`;
export const ErrorMessage = styled.span`
  text-align: center;
  color: #ff0000;
  background-color: #ffbbbb;
  padding: 6px;
  border-radius: 4px;
  display: none;
`;
