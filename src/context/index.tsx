import React, { createContext, useState } from 'react';
import { darkTheme, lightTheme } from '@/style/theme';
import { ThemeProvider } from 'styled-components';

interface ModeContextProps {
  mode: boolean;
  toggleMode: () => void;
}

export const ModeContext = createContext<ModeContextProps>({
  mode: true,
  toggleMode: () => {},
});

export const ModeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState(true);

  const toggleMode = () => {
    setMode(mode ? false : true);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={mode ? darkTheme : lightTheme}>{children} </ThemeProvider>
    </ModeContext.Provider>
  );
};
