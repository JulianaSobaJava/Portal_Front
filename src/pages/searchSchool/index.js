import React, { useState } from "react";
import Container from "../../components/container/container";
import Wrapper from "../../components/wrapper/wrapper";
import AsideFilter from "../../components/asideFilter/asideFilter";
import GridView from "../../components/gridView/gridView";
import MapaView from "../../components/mapaView/mapaView";
import { schools } from "../../helpers/data/schools";
import * as Icons from "react-icons/fa";
import * as style from "./searchSchool.styled";

// import { Container } from './styles';

export default function SearchSchool() {
  const [click, setClick] = useState(true);
  const [query, setQuery] = useState("");
  return (
    <Container>
      <Wrapper />
      <style.SchoolBanner>
        <style.SchoolSearch>
          <h1>Pesquisar por escolas</h1>
          <style.ContainerSearch>
            <div>
              <Icons.FaSearch />
              <style.Input
                placeholder="Insira o nome de uma escola"
                type="text"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
            <button>Pesquisar</button>
          </style.ContainerSearch>
        </style.SchoolSearch>
      </style.SchoolBanner>
      <style.SchoolContent>
        <AsideFilter />
        <style.SchoolContentSection>
          <style.TypeView>
            <div>
              <button
                onClick={() => {
                  setClick(true);
                }}
              >
                <Icons.FaGripHorizontal className="fa-search-escola" />
                Ver Em Colunas
              </button>
              <button
                onClick={() => {
                  setClick(false);
                }}
                btn-search
              >
                <Icons.FaRegMap className="fa-search-escola" />
                Ver No Mapa
              </button>
            </div>
          </style.TypeView>
          <style.Views>
            {click ? (
              <GridView query={query} schools={schools} />
            ) : (
              <MapaView />
            )}
          </style.Views>
        </style.SchoolContentSection>
      </style.SchoolContent>
    </Container>
  );
}
