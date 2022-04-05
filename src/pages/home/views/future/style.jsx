import styled from "styled-components";
import * as Icons from "react-icons/md";

export const FutureContainer = styled.section`
  width: 100%;
  height: 96vh;
  background-color: var(--main-color);
`;

export const FutureContent = styled.div`
  display: flex;
  width: 100%;
  height: 38%;

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
  }
  p {
    color: var(--white-color);
    font-weight: bold;
    padding-right: 8%;
  }
`;
export const Cloud = styled(Icons.MdOutlineCloudQueue)`
  position: absolute;
  color: var(--white-color);
  font-size: 3em;
  top: 26%;
  left: 28%;
  z-index: 1;
`;

export const Book = styled(Icons.MdOutlineMenuBook)`
  position: absolute;
  color: var(--white-color);
  font-size: 3em;
  left: 80%;
  top: 70%;
  z-index: 3;
`;

export const PostFuture = styled.div`
  width: 100%;
  display: flex;
  height: 60%;
  position: relative;
`;
