import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  padding: 1% 3%;
  height: 16vh;
  width: ${(props) => (props.status ? "80%" : "100%")};
  flex-direction: column;
  position: relative;
  right: 0;
  z-index: 5;
  position: fixed;
  box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.6);
  grid-area: navbar;
  transition: 0.5s all;
  background-color: var(--white-color);

  > div {
    display: flex;
    justify-content: ${(props) =>
      props.status ? "flex-end" : "space-between"};
    align-items: center;
  }
`;

export const Button = styled.button`
  padding: 1% 2%;
  font-size: 1.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
