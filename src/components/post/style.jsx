import styled from "styled-components";

export const Container = styled.div`
  height: 100%;

  & + div {
    margin-top: 50px;
  }
`;

export const Image = styled.div`
  width: 720px;
  height: 400px;
  padding: 2px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 20px 0;
    color: #232332;
    font-size: 30px;
    font-weight: 500;
  }
  p {
    font-size: 18px;
    color: #232332;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    & + p {
      margin-top: 20px;
    }
  }
`;
export const MainContent = styled.div`
  padding: 0 10% 0 3%;
`;
export const data = styled.span`
  font-size: 14px;
  margin-bottom: 20px;
`;
