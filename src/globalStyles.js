import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    & > #root {
      width: 100%;
      height: 100%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    font-family: 'HelveticaNeue', Arial, sans-serif;
  }

  #root {
    display: flex;
  }


`
