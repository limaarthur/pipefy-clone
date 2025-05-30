import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    background: #ecf1f8;
    color: #333333;
  }

  ul {
    list-style: none;
  }
`;