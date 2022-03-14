import styled, {ThemeProvider} from 'styled-components';
import {GlobalStyle} from 'styles/global-styles';
import {lightTheme} from 'styles/theme';

import type {ReactElement} from 'react';
import {Header} from 'components/common/Header/Header';
import {Footer} from 'components/common/Footer/Footer';

interface LayoutProps {
  children?: ReactElement;
}

export const Layout = ({children}: LayoutProps) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Wrap>
        <Header />
        {children}
      </Wrap>
      <Footer />
    </ThemeProvider>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1224px;
  margin: 0 auto;

  height: auto;
  min-height: calc(100vh - 6rem);
`;
