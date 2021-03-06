import { injectGlobal } from 'styled-components';

injectGlobal`
  *, *:before, *:after {
    text-decoration: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    appearance: none;
  }

  body {
    background-color: #2a2a2a;
    font-family: 'Roboto', sans-serif;
  }
`;
