import { createGlobalStyle } from 'styled-components'

export const colors = {
    darkBlue: '#2c3e50',
    lightBlue: '#34495e',
    blue: '#34495e',
    white: '#ecf0f1',
    gray: ' #dfe6e9',
    lightGray: '#95a5a6',
    lightBlack: '#7f8c8d',
}

export const breakpoints = {
    tablet: '1023px',
    mobile: '767px',
}

export const GlobalStyles = createGlobalStyle`
* {
    display: border-box;
    padding: 0;
    margin: 0;
    font-style: Roboto, san-serif;
}

body {
    // background-color: ${colors.white};
}
`
