import React, { useReducer, useState } from 'react';
import Header from '@/components/layout/header';
import { Main } from '@/components/layout/main';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from 'styled-components';
// import Sidebar from '@/components/layout/sidebar';
import { PublicLayoutProvider, PublicLayoutProviderInterface } from './context';
import { initialState, reducer } from './reducer';
import { darkTheme, lightTheme } from '@/style/theme';
import { PublicLayoutContainer } from './style';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <PublicLayoutProvider value={{ ...state, dispatch }}>
        <PublicLayoutContainer>
          <Header toggle={isDarkMode} toggleTheme={setIsDarkMode} />
          {/* <Sidebar /> */}
          <Main>{children}</Main>
          <Footer />
        </PublicLayoutContainer>
      </PublicLayoutProvider>
    </ThemeProvider>
  );
};

export default PublicLayout;
