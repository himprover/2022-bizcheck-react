import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

import {font} from 'styles/font';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${font}

    * {
        font-family: 'Pretendard';
        color:rgb(255,255,255);
        transition: all 0.1s ease-in-out;
    }
    html {
        font-size:62.5%;
    }
    body{
        overflow:hidden;
    }

    h1, h2, h3, h4 ,h5, h6{
        margin:0;
    }
`;
