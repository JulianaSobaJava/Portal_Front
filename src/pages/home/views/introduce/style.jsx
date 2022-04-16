import styled from "styled-components";

export const Introduce = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  margin: 1em 0;
  background: var(--grey-background);
`;
export const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 70%;
  padding: 0 10px;
  margin: 0 1em;
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: var(--white-color);

  p {
    margin-top: 40px;
    color: #232332;
    line-height: 1.5;
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
