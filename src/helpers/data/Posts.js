import React from "react";
import styled from "styled-components";
import post from "./PostData";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";

const Post = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 3%;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  padding: 0 2em;
  color: var(--black-color);
  background: var(--white-color);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);

  p {
    margin-top: 20px;
  }
`;
const Image = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: left;
  padding: 1em 0;
  margin-bottom: 1em;

  img {
    height: 80%;
    width: 40%;
  }
`;
const LinkExplore = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1em;
  color: var(--black-color);
`;
const LinkTittle = styled(Link)`
  position: relative;
  margin-bottom: 1em;

  h4 {
    text-align: left;
    color: var(--black-color);
    margin-bottom: 1em;
  }
`;
export default function Posts() {
  return post.map((item) => {
    return (
      <Post>
        <PostContent>
          <Image>
            <img src={item.icon} alt="icon" />
          </Image>
          <LinkTittle to={item.link}>
            <h4>{item.tittle}</h4>
          </LinkTittle>
          <p>{item.text}</p>
          <LinkExplore to={item.link}>
            <h5>{item.tittleLink}</h5> <Icons.FaAngleRight />
          </LinkExplore>
        </PostContent>
      </Post>
    );
  });
}
