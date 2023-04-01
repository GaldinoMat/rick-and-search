import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
`;

export default GlobalStyle;
