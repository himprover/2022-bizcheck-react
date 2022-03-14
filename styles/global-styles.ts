import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

import {font} from 'styles/font';

export const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${font}

    * {
        font-family: 'Pretendard';
    }

    html {
        font-size:62.5%;
    }
`;
