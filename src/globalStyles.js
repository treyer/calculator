import { createGlobalStyle } from 'styled-components'

import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${theme.font};
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
  }

  #root {
    display: flex;
  }

@font-face {
    font-family: 'HelveticaNeue';
    src: url('src/assets/fonts/HelveticaNeueCyr-Bold.eot');
    src: local('src/assets/fonts/HelveticaNeueCyr-Bold'),
        url('src/assets/fonts/HelveticaNeueCyr-Bold.eot?#iefix') format('embedded-opentype'),
        url('src/assets/fonts/HelveticaNeueCyr-Bold.woff2') format('woff2'),
        url('src/assets/fonts/HelveticaNeueCyr-Bold.woff') format('woff'),
        url('src/assets/fonts/HelveticaNeueCyr-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'HelveticaNeue';
    src: url('src/assets/fonts/HelveticaNeueCyr-Light.eot');
    src: local('src/assets/fonts/HelveticaNeueCyr-Light'),
        url('src/assets/fonts/HelveticaNeueCyr-Light.eot?#iefix') format('embedded-opentype'),
        url('src/assets/fonts/HelveticaNeueCyr-Light.woff2') format('woff2'),
        url('src/assets/fonts/HelveticaNeueCyr-Light.woff') format('woff'),
        url('src/assets/fonts/HelveticaNeueCyr-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'HelveticaNeue';
    src: url('src/assets/fonts/HelveticaNeueCyr-Medium.eot');
    src: local('src/assets/fonts/HelveticaNeueCyr-Medium'),
        url('src/assets/fonts/HelveticaNeueCyr-Medium.eot?#iefix') format('embedded-opentype'),
        url('src/assets/fonts/HelveticaNeueCyr-Medium.woff2') format('woff2'),
        url('src/assets/fonts/HelveticaNeueCyr-Medium.woff') format('woff'),
        url('src/assets/fonts/HelveticaNeueCyr-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'HelveticaNeue';
    src: url('src/assets/fonts/HelveticaNeueCyr-Black.eot');
    src: local('src/assets/fonts/HelveticaNeueCyr-Black'),
        url('src/assets/fonts/HelveticaNeueCyr-Black.eot?#iefix') format('embedded-opentype'),
        url('src/assets/fonts/HelveticaNeueCyr-Black.woff2') format('woff2'),
        url('src/assets/fonts/HelveticaNeueCyr-Black.woff') format('woff'),
        url('src/assets/fonts/HelveticaNeueCyr-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'HelveticaNeue';
    src: url('src/assets/fonts/HelveticaNeueCyr-Heavy.eot');
    src: local('src/assets/fonts/HelveticaNeueCyr-Heavy'),
        url('src/assets/fonts/HelveticaNeueCyr-Heavy.eot?#iefix') format('embedded-opentype'),
        url('src/assets/fonts/HelveticaNeueCyr-Heavy.woff2') format('woff2'),
        url('src/assets/fonts/HelveticaNeueCyr-Heavy.woff') format('woff'),
        url('src/assets/fonts/HelveticaNeueCyr-Heavy.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'HelveticaNeue';
    src: url('src/assets/fonts/HelveticaNeueCyr-Roman.eot');
    src: local('src/assets/fonts/HelveticaNeueCyr-Roman'),
        url('src/assets/fonts/HelveticaNeueCyr-Roman.eot?#iefix') format('embedded-opentype'),
        url('src/assets/fonts/HelveticaNeueCyr-Roman.woff2') format('woff2'),
        url('src/assets/fonts/HelveticaNeueCyr-Roman.woff') format('woff'),
        url('src/assets/fonts/HelveticaNeueCyr-Roman.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'HelveticaNeue';
    src: url('src/assets/fonts/HelveticaNeueCyr-UltraLight.eot');
    src: local('src/assets/fonts/HelveticaNeueCyr-UltraLight'),
        url('src/assets/fonts/HelveticaNeueCyr-UltraLight.eot?#iefix') format('embedded-opentype'),
        url('src/assets/fonts/HelveticaNeueCyr-UltraLight.woff2') format('woff2'),
        url('src/assets/fonts/HelveticaNeueCyr-UltraLight.woff') format('woff'),
        url('src/assets/fonts/HelveticaNeueCyr-UltraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'HelveticaNeue';
    src: url('src/assets/fonts/HelveticaNeueCyr-Thin.eot');
    src: local('src/assets/fonts/HelveticaNeueCyr-Thin'),
        url('src/assets/fonts/HelveticaNeueCyr-Thin.eot?#iefix') format('embedded-opentype'),
        url('src/assets/fonts/HelveticaNeueCyr-Thin.woff2') format('woff2'),
        url('src/assets/fonts/HelveticaNeueCyr-Thin.woff') format('woff'),
        url('src/assets/fonts/HelveticaNeueCyr-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
}

`
