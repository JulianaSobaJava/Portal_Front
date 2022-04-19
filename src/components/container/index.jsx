import React, { useEffect } from "react";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
  min-width: 360px;
`;

export default function Container(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Main className="container">{props.children}</Main>;
}
