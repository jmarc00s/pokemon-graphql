import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,500;0,700;0,900;1,300;1,700&display=swap');
}

html {
    font-size: 62.5%
}

body {
    font-family: Roboto, 'Helvetica Neue', sans-serif; 
    font-size: 1.6rem;  
}

`;
