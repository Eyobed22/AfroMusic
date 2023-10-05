import { css } from '@emotion/react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body,
  h1,
  h2,
  h3,
  p {
    margin: 0;
    padding: 0;
  }

  body{
    font-family: 'Poppins';
  }
`;

export default GlobalStyle;
