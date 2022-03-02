import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import * as style from "../../pages/searchSchool/asideFilter.styled";
import { filters } from "./dataAsideFilter";

export default function AsideFilter() {
  const [isExpanded, setClickShow] = useState(false);

  const toggle = (index) => {
    if (isExpanded === index) {
      return setClickShow(null);
    }
    setClickShow(index);
  };

  return (
    <style.AsideFilterContainer>
      <style.FilterConatiner>
        {filters.map((filter, index) => (
          <style.FilterContent key={index}>
            <style.FilterButtonAside onClick={() => toggle(index)} key={index}>
              <h3>{filter.title}</h3>
              {isExpanded ? <Icons.FaAngleDown /> : <Icons.FaAngleRight />}
            </style.FilterButtonAside>
            {filter.type === "text" && (
              <style.FilterOptionsText isExpanded={isExpanded}>
                <div style={{ border: "1px solid var(--grey-text-color)" }}>
                  <style.TextField
                    type={filter.type}
                    placeholder="Olá eu sou uma input"
                  />
                </div>
              </style.FilterOptionsText>
            )}
            {filter.type === "checkbox" && (
              <style.FilterOptionsCheckBox isExpanded={isExpanded}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  <style.Checkbox type={filter.type} />
                  <style.Checkbox type={filter.type} />
                  <style.Checkbox type={filter.type} />
                  <style.Checkbox type={filter.type} />
                  <style.Checkbox type={filter.type} />
                </div>
              </style.FilterOptionsCheckBox>
            )}
          </style.FilterContent>
        ))}
      </style.FilterConatiner>
    </style.AsideFilterContainer>
  );
}
