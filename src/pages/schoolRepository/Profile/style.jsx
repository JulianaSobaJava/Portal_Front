import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 12%;
  display: flex;
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  padding: 2% 4% 2% 4%;
`;

export const Numbers = styled.div`
  width: 100%;
  padding: 2% 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  span {
    margin: 0 14px;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    border: 8px solid var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Aditional = styled.div`
  background-color: yellow;
  margin: 30px 0 0;
  display: flex;
  flex-direction: column;

  ul {
    width: 40%;
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 20px 10px 20px 10px;

    li {
      margin-left: 10px;
      position: relative;
      &:before {
        color: #3fc2c0;
        content: "•";
        left: -10px;
        position: absolute;
      }
    }
  }
`;
export const Extra = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 4%;
  > div {
    width: 50%;
    color: var(--main-color);
    padding: 0.5% 2%;
    border-left: 3px solid var(--main-color);
  }
`;
