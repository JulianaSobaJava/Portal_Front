import React, { useEffect } from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100%;
  position: relative;
`;

export default function Container(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Main className="container">{props.children}</Main>;
}
