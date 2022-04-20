import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 40vh;
  background-color: blue;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 46%;
  z-index: 1;
  display: flex;
  padding: 2% 5%;
  align-items: center;
`;

export const ProfileFoto = styled.div`
  width: 340px;
  height: 340px;
  background-color: orange;
  border-radius: 3px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const FotodeFundo = styled.div`
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const Info = styled.div`
  display: flex;
  margin-left: 4%;
  margin-top: 8%;
  height: 100%;
  flex-direction: column;
  padding: 20px 10px;

  h1 {
    margin: 2% 0;
    color: #232332;
  }

  p {
    font-size: 14px;
    color: #232332;
    line-height: 1.5;
  }
`;
