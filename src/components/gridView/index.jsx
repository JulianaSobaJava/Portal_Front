import React from "react";
import styled from "styled-components";
import Post from "../../helpers/data/Post";

const Result = styled.div`
  width: 100%;
  height: 100%;
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;

function GridView({ schools, query }) {
  return (
    <Result>
      <div>
        {schools
          .filter((school) => school.nome.toLowerCase().includes(query))
          .map((school) => {
            return <Post nome={school.nome} />;
          })}
      </div>
    </Result>
  );
}

export default GridView;
