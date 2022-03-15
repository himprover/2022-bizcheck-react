import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

import {font} from 'styles/font';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${font}

    * {
        font-family: 'Pretendard';
        color:rgb(255,255,255);
    }
    html {
        font-size:62.5%;
    }

    h1, h2, h3, h4 ,h5, h6{
        margin:0;
    }
`;
