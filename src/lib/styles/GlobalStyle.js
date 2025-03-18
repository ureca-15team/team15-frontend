import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


const GlobalStyle = createGlobalStyle`

    html, body {
      height: 100%;
    }
    #root{
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 100vw;
      margin: 0 auto;
    }

    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
        margin: 0 auto;
    }
    input {
      border: none;
    }
    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }li {
      list-style: none;
    }
    .my-popup {
      width: 300px;
      padding: 15px 35px;
    }
`;

export default GlobalStyle;
