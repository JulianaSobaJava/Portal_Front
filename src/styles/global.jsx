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

html{
    @media(max-width:1080){
        font-size: 93.75%;
    }

      @media(max-width:720){
        font-size: 87.5%;
    }
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight:400;
}


h1,h2,h3,h4,h5,h6, strong{
    font-weight:600;
}

li, ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
ul{
    padding-inline-start: 0;
    margin-block-end: 0;
    margin-block-start: 0;
}


body{
    background:var(--background);
    --webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}

button{
    cursor:pointer;
}

.react-modal-overlay{
  background:rgba( 0, 0, 0, 0.5 );

  position:fixed;
  top:0;
  left:0;
  bottom:0;
   right:0;
   z-index:10;

  display:flex;
  align-items:center;
  justify-content:center;
  overflow: hidden;
}

.react-modal-content {
  width:100%;
  height: 100vh;
  max-width:800px;
  max-height:700px;
  background:var(--white-color);
  position:relative;
  padding:3rem;
  border-radius:0.2rem;
}

.react-modal-close{
    position:absolute;
    z-index: 12;
    border:0;
    left:110%;
    top:1.5rem;
    background:transparent;
    transition: filter .2s;

    &:hover{
        filter:brightness(0.1);
    }
}
`;
