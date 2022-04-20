import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import * as style from "./style";

const AccordionData = [
  {
    title: "Why can’t I sign in?",
    content:
      "Make sure you’re trying to sign in to the right application system. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt.",
  },
  {
    title: "Where can I find out about funding?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrumharum ducimus voluptatem dolorum id, natus deleniti ratione laborum voluptatibus! Commodi placeat, voluptatem doloribus iure aliquid sint dolores qui incidunt. Ea?",
  },
];

export default function Matricula() {
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
