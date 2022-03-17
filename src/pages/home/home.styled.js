import styled from "styled-components";
import wrapper from "../../assets/image/mainImage.jpg";
import * as Icons from "react-icons/md";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(4, 4, 20, 0.5), rgba(4, 4, 20, 0.5)),
    url(${wrapper});
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;

    @media (min-width: 360px) {
         width:360px;
  }
`;

export const Text = styled.div`
  width: 50%;
  height:40vh;
  color: #fff;
  display:flex;
  flex-direction:column;
  position:relative;
  top:12%;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1{
  font-size: 62px;
  margin-top:3%;
  }

  p{
  margin: 10px 0 20px;
  font-size: 19px;
  color: #fff;
`;

export const ButtonGroup = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkButton = styled(Link)`
  width: 10em;
  margin: 0 8px;
  padding: 10px 8px;
  color: var(--white-color);
  border: 1px solid var(--main-color);
  text-align: center;
  transition: 0.5s ease-in-out;

  &:hover {
    color: var(--white-color);
    background: var(--main-color);
  }
  @media (max-width: 1110px) {
    border: none;
    padding: 0;
  }
`;

export const SearchContainer = styled.section`
  width: 100%;
  position: relative;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Search = styled.div`
  padding: 3em 4em;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: -12%;
  width: 80%;
  height: 50vh;
  background-color: var(--main-color);
`;
export const InputSearch = styled.div`
  margin-top: 10px;
  background: var(--white-color);
  color: var(--grey-text-color);
  height: 60px;
  border-radius: 50px;
  padding: 0 1.2em;
  display: flex;
  align-items: center;
  margin-bottom: 3em;

  input {
    width: 80%;
    padding: 0.4em;
    font-size: 1em;
  }
`;

export const FilterOPtions = styled.div`
  padding: 0 0.4em;
  flex-wrap: wrap;
  display: flex;
  width: 80%;
`;

export const FiltersGroups = styled.div`
  background: ${(props) =>
    props.click ? "rgba(0, 0,0,0.2)" : "rgba(2, 7,28,0.4)"};
  position: relative;
  height: 40px;
  margin: ${(props) => (props.click ? ".8em .2em" : ".8em .2em")};
  border-radius: 20px;
  padding: 0.2em 0.6em;
  display: flex;
  align-items: center;
  transition: all 1s ease;
  cursor: pointer;

  input {
    display: ${(props) => (props.click ? "flex" : "none")};
    overflow: visible;
  }
  label {
    cursor: pointer;
  }
`;
export const LinkExplore = styled(Link)`
  color: var(--black-color);
  padding: 0 0.6em;
  display: flex;
  align-items: center;
  position: relative;
  top: 50%;
`;
export const RandomSchools = styled.section`
  width: 100%;
  padding: 1% 6%;

    span {
      color: var(--main-color);
    }
  }
  h4 {
    margin: 30px 0 10px 2%;
  }
`;

export const RandomContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  margin-bottom: 4rem;
`;
export const BoxContent = styled.div`
  position: absolute;
  top: -100%;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  padding-top: 5rem;
  text-align: center;
  transition: all 0.3s linear;

  h3 {
    font-size: 1.4em;
    color: var(--white-color);
  }
  p {
    font-size: 0.8rem;
    color: var(--white-color);
    padding: 1rem 0;
  }
`;
export const Box = styled.div`
  height: 18em;
  flex: 1 1 16em;
  border: 1rem solid #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  &: hover ${BoxContent} {
    top: 0;
  } ;
`;

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

export const HighSchoolSection = styled.section`
  width: 100%;
  height: 80vh;
  padding: 2% 3%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  margin-bottom: 2em;
`;

export const ImageGroup = styled.div`
  width: 70%;
  height: 100%;
  padding: 0 4%;
  position: relative;
`;
export const Img = styled.img`
  position: absolute;

  ${(props) =>
    props.img1 &&
    `
    left:50%;
    top: 45%;
     z-index: 2;
  `}
  ${(props) =>
    props.img2 &&
    `
    top: 26%;
    left: 28%;
    z-index: 1;
  `}
    ${(props) => props.img3 && `top: 8%;`}

  &:hover {
    z-index: 8;
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;

export const DescriptionHighSchoolSection = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin-top: 1em;
  }
`;
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
  }

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
export const Question = styled.section`
  width: 100%;
  height: 70vh;
  padding: 0 5%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  flex-direction: column;

  span {
    position: absolute;
    top: 2%;
    right: 3%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;

export const QuestionContent = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-color);
`;

export const QuestionImg = styled.div`
  width: 40%;
  height: 90%;
  position: relative;
  margin-left: 2em;
  background-color: aqua;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const QuestionDescription = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 2em;

  label {
    width: 64%;
    display: flex;
    justify-content: space-around;
  }
`;

export const QuestionLink = styled(Link)`
  color: var(--main-color);
`;
