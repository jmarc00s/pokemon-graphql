import { render } from '@testing-library/react';
import { theme } from './theme';
import { GlobalStyles } from './global';
import { ThemeProvider } from 'styled-components';
import { ReactNode } from 'react';

interface RenderThemeProps {
    children: ReactNode
}

export const RenderTheme = ({children}: RenderThemeProps) => {
  return render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};
