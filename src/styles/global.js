import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --main-color:#2ed4d9;
    --primaryColor: #155377;
    --white-color:#fff;
    --grey-text-color:#999c9e;
    --grey-background:#f3f3f3;
    --grey-background-second:#f8f8f8;
    --black-color:#000;
    --grey-dark:#4a4a4a;;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    text-decoration: none;
    outline: none;
    border: none;
}

html, body{
    height: 100%;
}
ul{
    list-style: none;
}
  button {
    cursor: pointer;
}

`;
