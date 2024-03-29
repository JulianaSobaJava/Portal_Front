import styled from "styled-components";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  background-color: var(--grey-dark);
  height: 40vh;
  margin-top: 10em;
  width: 100%;
  color: var(--white-color);
  margin: 0;

  @media (max-width: 360) {
    height: 20vh;
  }
`;
export const footerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const navFooter = styled.nav`
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  ul {
    display: flex;
  }
`;
export const navFooterLinkIcons = styled.div`
  margin: 3em;
  line-height: 2em;
`;
export const footerIcons = styled(Link)`
  color: var(--white-color);
`;
export const navFooterSocial = styled.ul`
  display: flex;
  margin: 0;

  li {
    margin: 0 0;
  }
`;
export const FooterImg = styled.span`
  width: 100%;
  height: 50%;
  display: flex;
  position: relative;
  justify-content: flex-end;
  border-bottom: 2px solid var(--main-color);

  img {
    top: 2px;
    height: 100%;
    width: 38%;
    position: absolute;
  }
`;
export const footerEnd = styled.ul`
  width: 80%;
  height: 12%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style-type: none;

  span {
    display: flex;
  }
`;
export const Linkend = styled(Link)`
  color: var(--main-color);
  margin-left: 2em;
`;
