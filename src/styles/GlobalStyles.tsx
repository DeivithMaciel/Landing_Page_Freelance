import { createGlobalStyle } from 'styled-components'

export const colors = {
    while: '#ecf0f1',
    darkBlue: '#2c3e50',
    lightBlue: '#34495e',
    blue: '#34495e',
    gray: ' #dfe6e9',
}

export const GlobalStyles = createGlobalStyle`
* {
    display: border-box;
    padding: 0;
    margin: 0;
    font-style: Roboto, san-serif;
}

body {
    // background-color: ${colors.while};
}
`
