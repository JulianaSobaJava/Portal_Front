import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import slide1 from "../../../../assets/image/mainImage.jpg";
import slide2 from "../../../../assets/image/banner.jpg";
import slide3 from "../../../../assets/image/banner2.jpg";
import slide4 from "../../../../assets/image/banner3.jpg";

const slider = keyframes`
0%{
  left: 0;
}
20%{
  left: 0;
}
25%{
  left: -100%;
}
45%{
  left: -100%;
}
50%{
  left: -200%;
}
70%{
  left: -200%;
}
75%{
  left: -300%;
}
95%{
  left: -300%;
}
100%{
  left: -400%;
}

`;

export const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;

  ul {
    position: relative;
    width: 500%;
    height: 100%;
    left: 0px;
    margin: 0;
    animation: 20s ${slider} infinite;
    transition: 10s all;

    > div {
      float: left;
      width: 20%;
      height: 100%;

      transition: 10s all;

      display: flex;
      flex-wrap: wrap;
      background-repeat: no-repeat;
      background-size: 100%;
      display: flex;
      align-items: center;

      :nth-child(1) {
        background-image: linear-gradient(
            rgba(4, 4, 20, 0.7),
            rgba(4, 4, 20, 0.5)
          ),
          url(${slide1});
      }

      :nth-child(2) {
        background-image: linear-gradient(
            rgba(4, 4, 20, 0.7),
            rgba(4, 4, 20, 0.5)
          ),
          url(${slide2});
      }

      :nth-child(3) {
        background-image: linear-gradient(
            rgba(4, 4, 20, 0.7),
            rgba(4, 4, 20, 0.5)
          ),
          url(${slide3});
      }

      :nth-child(4) {
        background-image: linear-gradient(
            rgba(4, 4, 20, 0.4),
            rgba(4, 4, 20, 0.5)
          ),
          url(${slide4});
      }

      :nth-child(5) {
        background-image: linear-gradient(
            rgba(4, 4, 20, 0.7),
            rgba(4, 4, 20, 0.5)
          ),
          url(${slide1});
      }
    }
  }
`;

export const Text = styled.div`
  width: 50%;
  height: 40vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 10%;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4% 6%;

  h1 {
    font-size: 70px;
    margin-top: 3%;
  }

  p {
    margin: 10px 0 20px;
    font-size: 20px;
    color: #fff;
  }
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
