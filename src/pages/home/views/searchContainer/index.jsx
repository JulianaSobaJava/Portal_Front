import React from "react";

import * as Icons from "react-icons/fa";
import filterOptions from "../../../../helpers/data/FiltersOptions";

import * as S from "./style";

export default function Search() {
  const [click, setClick] = React.useState(false);

  const handleCheckbox = (e) => {
    if (e.currentTarget.name === "foco") {
      setClick(!click);
      console.log(click);
      console.log(e.currentTarget);
      return;
    }
  };

  const handleClick = () => {
    const input = document.getElementById("searchHomeInput");
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const inputValue = input.value.trim();
        if (!inputValue) {
          return;
        }
        window.location.href = "http://localhost:3000/schools";
      }
    });
  };

  return (
    <S.SearchContainer>
      <S.Search>
        <h1>Encontre mais de 500 escolas do Ensino Médio</h1>
        <S.InputSearch>
          <Icons.FaSearch />
          <input
            placeholder="Insira o nome de uma escola"
            type="text"
            onKeyPress={handleClick}
            id="searchHomeInput"
          />
        </S.InputSearch>

        <div>
          <label>Filtrar pesquisa(optional)</label>
          <S.FilterOPtions>
            {filterOptions.map((item) => (
              <S.FiltersGroups
                onClick={handleCheckbox}
                click={click}
                key={item.id}
              >
                <input
                  type="checkbox"
                  name={item.name}
                  click={click.toString()}
                />
                <label htmlFor={item.htmlFor}>{item.text}</label>
              </S.FiltersGroups>
            ))}
          </S.FilterOPtions>

          <S.LinkExplore to="/escolas">
            Ver todas as escolas <Icons.FaAngleRight />
          </S.LinkExplore>
        </div>
      </S.Search>
    </S.SearchContainer>
  );
}
