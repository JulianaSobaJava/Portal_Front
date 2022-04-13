import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  padding: 2% 3% 0 3%;
  flex-direction: column;
  border-bottom: 5px solid var(--main-color);
  position: relative;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
