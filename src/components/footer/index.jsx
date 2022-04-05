import React from "react";
import school from "../../assets/image/school.svg";
import * as Icons from "react-icons/fa";
import * as style from "./style";

export default function Footer() {
  return (
    <style.Footer>
      <style.footerContainer>
        <style.navFooter>
          <ul>
            <style.navFooterLinkIcons>
              <li>
                <style.footerIcons to="">Sobre</style.footerIcons>
              </li>
              <li>
                <style.footerIcons to="">Pesquisar escolas</style.footerIcons>
              </li>
              <li>
                <style.footerIcons to="">Artigos</style.footerIcons>
              </li>
              <li>
                <style.footerIcons to="">Tornar-me membro</style.footerIcons>
              </li>
            </style.navFooterLinkIcons>
            <style.navFooterLinkIcons>
              <li>
                <style.footerIcons to="">Ajuda</style.footerIcons>
              </li>
              <li>
                <style.footerIcons to="">Eventos</style.footerIcons>
              </li>
              <li>
                <style.footerIcons to="">Notícias</style.footerIcons>
              </li>
              <li>
                <style.footerIcons to="">Artigos</style.footerIcons>
              </li>
            </style.navFooterLinkIcons>
          </ul>
          <style.navFooterLinkIcons>
            <h4>Encontre-nos nas nossas redes sociais</h4>
            <p>
              <style.footerIcons to="">Portal das Escolas</style.footerIcons>
            </p>
            <style.navFooterSocial>
              <li>
                <style.footerIcons to="">
                  <Icons.FaFacebook />
                </style.footerIcons>
              </li>
              <li>
                <style.footerIcons to="">
                  <Icons.FaTwitter />
                </style.footerIcons>
              </li>
              <li>
                <style.footerIcons to="">
                  <Icons.FaLinkedin />
                </style.footerIcons>
              </li>
              <li>
                <style.footerIcons to="">
                  <Icons.FaInstagram />
                </style.footerIcons>
              </li>
            </style.navFooterSocial>
          </style.navFooterLinkIcons>
        </style.navFooter>
        <style.FooterImg>
          <img src={school} alt="" />
        </style.FooterImg>
        <style.footerEnd>
          <span>
            <li>
              <style.Linkend to="">Termos de uso</style.Linkend>
            </li>
            <li>
              <style.Linkend to="">Politíca de privacidade</style.Linkend>
            </li>
          </span>

          <li>2022 Portal das escolas</li>
        </style.footerEnd>
      </style.footerContainer>
    </style.Footer>
  );
}
