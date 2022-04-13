import React from "react";
import * as S from "./style";
import Container from "../../../../../components/container/index";
import Header from "../../components/header/index";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/md";

const NameSchool = "Instituto Médio Industrial de Luanda";

export default function DashBoard() {
  return (
    <>
      <Header />
      <Container>
        <S.Content>
          <S.ContentBody>
            <S.Body>
              <S.Head>
                <h2>DashBoard</h2>
              </S.Head>
              <S.Midle>
                <span>Ordenar por:</span>
              </S.Midle>
              <S.Section>
                <S.SectionContent>
                  <S.FirstCotent>
                    <h1>
                      <Link to="/">{NameSchool}</Link>
                    </h1>
                    <span>
                      <S.Icons>
                        <Icons.MdInfo />
                      </S.Icons>
                      <S.Icons>
                        <Icons.MdClose />
                      </S.Icons>
                    </span>
                  </S.FirstCotent>
                  <span>
                    <Link to="">Entrar em contacto</Link>
                  </span>
                </S.SectionContent>
                <S.SectionContent>
                  <S.FirstCotent>
                    <h1>
                      <Link to="/">{NameSchool}</Link>
                    </h1>
                    <span>
                      <S.Icons>
                        <Icons.MdInfo />
                      </S.Icons>
                      <S.Icons>
                        <Icons.MdClose />
                      </S.Icons>
                    </span>
                  </S.FirstCotent>
                  <span>
                    <Link to="">Entrar em contacto</Link>
                  </span>
                </S.SectionContent>
              </S.Section>
            </S.Body>
          </S.ContentBody>
        </S.Content>
      </Container>
    </>
  );
}
