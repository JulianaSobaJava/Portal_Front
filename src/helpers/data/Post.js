import React from "react";
import styled from "styled-components";

const PostConatiner = styled.div`
  width: 320px;
  height: 280px;
  margin: 0px 25px 40px 25px;
  display: flex;
  flex-direction: column;
  background: yellow;

  img {
    position: relative;
    width: 100%;
    height: 90%;
    object-fit: cover;
    border-radius: 7px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default function Post({ img, nome }) {
  return (
    <PostConatiner>
      <img src={img} alt="" />
      <div>{nome}</div>
    </PostConatiner>
  );
}
