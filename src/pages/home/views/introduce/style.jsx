import styled from "styled-components";

export const Introduce = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;
  margin: 1em 0;
  background: var(--grey-background);
  flex-wrap: wrap;

  @media (max-width: 600px) {
    height: 100%;
    padding: 10px 0;
  }
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
  position: relative;
  border: 1px solid var(--primaryColor);

  img {
    width: 100px;
  }
  @media (max-width: 660px) {
    width: 400px;
    margin-bottom: 20px;
    padding: 20px 8px;
  }

  img {
    @media (max-width: 660px) {
      height: 50px;
      width: 50px;
    }
  }

  p {
    margin-top: 40px;
    color: #232332;
    line-height: 1.5;

    @media (max-width: 1280px) {
      font-size: 16px;
    }

    @media (max-width: 1080px) {
      font-size: 12px;
    }
    @media (max-width: 360px) {
      font-size: 8px;
      margin-top: 20px;
    }
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
