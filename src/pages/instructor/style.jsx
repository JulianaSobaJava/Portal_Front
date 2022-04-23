import styled from "styled-components";
import image from "../../assets/image/mainImage.jpg";

export const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  background-image: linear-gradient(rgba(4, 4, 20, 0.5), rgba(4, 4, 20, 0.5)),
    url(${image});
`;
const BannerTeste = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  padding: 2px 50px;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  > img {
    width: 50%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  > div {
    width: 50%;

    @media (max-width: 768px) {
      width: 100%;
    }

    h1 {
      font-size: 45px;
      color: #fff;
    }

    p {
      width: 80%;

      @media screen and(max-width: 768px) {
        width: 100%;
      }

      height: auto;
      line-height: 2;
      color: #fff;
      font-size: 16px;
      /* text-align: justify; */
      margin: 12px 25px 15px;
    }

    a {
      color: #333;
      background: var(--main-color);
      padding: 10px 35px;
      border-radius: 2px;
      transition: all 0.4s;
      margin-top: 20px;
      margin-left: 4%;
      border: 1px solid var(--main-color);

      span {
        transition: all 0.4s;
      }

      :hover {
        background: #fff;
        color: var(--main-color);
        border: 1px solid var(--main-color);

        span {
          margin-left: 10px;
        }
      }
    }
  }
`;

export { BannerTeste };
export const InfoTeste = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% auto;
  width: 70%;
  justify-content: center;

  h3 {
    color: #333333;
    font-size: 28px;
    margin: 20px auto;
  }

  > p {
    font-size: 14px;
    line-height: 28px;
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    h4 {
      text-align: center;
      margin: 20px auto;
      color: #0041c2;
    }
  }

  blockquote {
    margin: 25px auto;
    display: flex;
    flex-direction: column;
    width: 100%;

    color: #221221;

    p {
      color: #232323;
      margin: 15px auto;
    }

    ul {
      display: flex;
      flex-direction: column;
      width: 100%;

      caption {
        text-align: start;
        color: blue;
        margin: 10px 0;
      }

      li {
        font-size: 15px;
        color: #221221;
        padding: 8px;

        ::before {
          content: "-";
          margin-right: 10px;
          color: #232323;
        }

        a {
          color: blue;
          font-weight: 600;
        }
      }
    }
  }
`;

export const Hexagonos = styled.p`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;

  img {
    width: 300px;
  }
`;
