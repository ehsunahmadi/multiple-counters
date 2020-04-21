import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, p {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
    color: #393939;
    font-size: 1.5rem;
    line-height: 2;
    max-width: 1000px;
    margin: auto;
    background-color: #DBDDE5;
    
  }
  a {
    text-decoration: none;
    color: #393939;
  }
  button {
    font-family: Helvetica Neue', sans-serif; 
    padding: 1rem;
  }


`;
export default GlobalStyle;
