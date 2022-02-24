import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #2E2938;
    --lilac: #B4ACF9;

    --dark-lilac: #8080c0;

    --light-white: rgba(255, 255, 255, 0.8);
    --white: #fff;
   
    --light-background: #363041;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
      @media (max-width: 1080px) {
        font-size: 93.75%; //15px
      }

      @media (max-width: 728px) {
        font-size: 87.5%; //14px
      }
    }

    body{
      overflow: hidden;
      background: var(--background);
      font-size: 'Asap';
    }

    button{
      cursor: pointer;
    }

    input{
      outline: none;
    }
`

