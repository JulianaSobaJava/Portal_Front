import React, { useEffect, useState } from "react";
import images from "../../../../helpers/data/Images";

import { api } from "../../../../services/axios";

import * as S from "./style";

export default function Slide() {
  const [location, setLocation] = useState("");
  const [school, setSchool] = useState([]);
  const [click, setClicked] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    api
      .get("provinces")
      .then((response) => {
        setLocation(response.data.ExistProvince[0]);
      })
      .catch((error) =>
        console.log("Response dê Error ou province => ", error)
      );

    api
      .get("schools")
      .then((response) => {
        setSchool(response.data.existSchool);
      })
      .catch((error) =>
        console.log("Response dê Error no método get => ", error)
      );
  }, []);

  const handleDropdown = () => {
    setClicked(!click);
  };

  console.log(location, click, school);
  return (
    <S.RandomSchools>
      <S.Content>
        <h3> Resultado de 4 escolas de</h3>
        <S.Dropdown>
          <button onClick={handleDropdown}>
            <h3>{location.name}</h3>
            <S.Icons />
          </button>
          <S.DropdownContent status={click}>
            <div>
              <input
                type="text"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              <p>Buscar por província</p>
            </div>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </S.DropdownContent>
        </S.Dropdown>
      </S.Content>
      <S.RandomContainer>
        {images.map((item) => {
          return (
            <S.Box key={item.id}>
              <img src={item.src} alt="" />
              <S.BoxContent>
                <h3>{item.nSchool}</h3>
                <p>{item.description}</p>
                <S.LinkButton to={item.link}>Ver Perfil</S.LinkButton>
              </S.BoxContent>
            </S.Box>
          );
        })}
      </S.RandomContainer>
    </S.RandomSchools>
  );
}
