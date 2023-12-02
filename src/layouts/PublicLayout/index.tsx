import React, { useReducer, useState } from 'react';
import Header from '@/components/layout/header';
import { Main } from '@/components/layout/main';
import Footer from '@/components/layout/footer';
import { ThemeProvider } from 'styled-components';
// import Sidebar from '@/components/layout/sidebar';
import { PublicLayoutProvider, PublicLayoutProviderInterface } from './context';
import { initialState, reducer } from './reducer';
import { darkTheme, lightTheme } from '@/style/theme';
import { ThemeModeProvider, useThemeMode } from '@/context/ThemeModeContext';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { theme } = useThemeMode();

  return (
    <ThemeModeProvider>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <PublicLayoutProvider value={{ ...state, dispatch }}>
          <Header />
          {/* <Sidebar /> */}
          <Main>{children}</Main>
          <Footer />
        </PublicLayoutProvider>
      </ThemeProvider>
    </ThemeModeProvider>
  );
};

export default PublicLayout;
