import { render } from '@testing-library/react';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

export const renderTheme = (children: ReactNode) => {
  return render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
