import styled from "styled-components";
import * as Icons from "react-icons/md";

export const FutureContainer = styled.section`
  width: 100%;
  height: 96vh;
  background-color: var(--main-color);
  overflow-x: hidden;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const FutureContent = styled.div`
  display: flex;
  width: 100%;
  height: 38%;
  @media (width: 390px) {
    height: 30%;
  }

  span {
    width: 50%;
    display: flex;
    position: relative;
    flex-direction: column;
  }
`;
export const FutureDescripion = styled.div`
  padding: 2% 5%;
  width: 50%;

  h1 {
    color: var(--white-color);
    font-size: 3em;
    margin-bottom: 20px;

    @media (max-width: 1030px) {
      font-size: 2rem;
    }

    @media (max-width: 700px) {
      font-size: 1.2em;
    }

    @media (max-width: 400px) {
      font-size: 1.2em;
    }
  }
  p {
    color: var(--white-color);
    font-weight: bold;
    padding-right: 8%;

    @media (max-width: 1030px) {
      font-size: 1rem;
    }

    @media (max-width: 700px) {
      font-size: 16px;
    }

    @media (max-width: 400px) {
      font-size: 12px;
    }
  }
`;
export const Cloud = styled(Icons.MdOutlineCloudQueue)`
  position: absolute;
  color: var(--white-color);
  font-size: 3em;
  top: 26%;
  left: 28%;
  z-index: 1;

  @media (max-width: 700px) {
    top: 10%;
    left: 10%;
  }
`;

export const Book = styled(Icons.MdOutlineMenuBook)`
  position: absolute;
  color: var(--white-color);
  font-size: 3em;
  left: 80%;
  top: 70%;
  z-index: 3;

  @media (max-width: 700px) {
    left: 50%;
  }
`;

export const PostFuture = styled.div`
  width: 100%;
  display: flex;
  height: 60%;
  position: relative;

  @media (max-width: 800px) {
    overflow-x: hidden;
    height: 50%;
  }
`;
