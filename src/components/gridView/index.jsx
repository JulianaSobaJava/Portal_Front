import React from "react";
import styled from "styled-components";
import Post from "../../helpers/data/Post";

const Result = styled.div`
  width: 100%;
  height: 100%;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

function GridView({ schools, query }) {
  return (
    <Result>
      <div>
        {schools
          .filter((school) =>
            school.nome.toLowerCase().includes(query.toLowerCase())
          )
          .map((school) => {
            return <Post nome={school.nome} />;
          })}
      </div>
    </Result>
  );
}

export default GridView;
