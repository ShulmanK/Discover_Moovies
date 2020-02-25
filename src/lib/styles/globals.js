import {css, createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset}
#root {
    position: relative;
}

body, 
html {
    height: 100%
}


`



