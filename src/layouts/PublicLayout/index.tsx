import React, { useContext, useReducer, useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import { Main } from '@/components/layout/main';
import Footer from '@/components/layout/footer';

// import Sidebar from '@/components/layout/sidebar';
import { PublicLayoutProvider, PublicLayoutProviderInterface } from './context';
import { initialState, reducer } from './reducer';

import { PublicLayoutContainer } from './style';

import { ModeContextProvider } from '@/context';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModeContextProvider>
      <PublicLayoutProvider value={{ ...state, dispatch }}>
        <PublicLayoutContainer>
          <Header />
          {/* <Sidebar /> */}
          <Main>{children}</Main>
          <Footer />
        </PublicLayoutContainer>
      </PublicLayoutProvider>
    </ModeContextProvider>
  );
};

export default PublicLayout;
