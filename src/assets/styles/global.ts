import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@200;400;600;900&family=Quicksand:wght@200;400;600;800;700&display=swap');
        font-family: 'Open Sans', sans-serif;
        font-family: 'Quicksand', sans-serif;
    }
`;