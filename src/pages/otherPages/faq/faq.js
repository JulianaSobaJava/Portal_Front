import React, { useState } from "react";
import AccordionData from "../../../helpers/data/FaqAccordion";
import * as style from "./faq.styled";
import * as Icons from "react-icons/fa";

export default function Faq() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      <style.FaqSection>
        {AccordionData.map((item, index) => {
          return (
            <style.Card>
              <style.CardHeader onClick={() => toggle(index)} key={index}>
                {item.title}
                {clicked === index ? (
                  <Icons.FaAngleRight />
                ) : (
                  <Icons.FaAngleDown />
                )}
              </style.CardHeader>
              {clicked === index ? (
                <style.CardBody>{item.content}</style.CardBody>
              ) : null}
            </style.Card>
          );
        })}
      </style.FaqSection>
    </>
  );
}
