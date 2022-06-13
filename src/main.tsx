import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from '../src/styles/theme';
import { GlobalStyles } from './styles/global';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/graphql';
import { ReactLocation, Router } from '@tanstack/react-location';
import { routes } from './config/routes';

const location = new ReactLocation();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router location={location} routes={routes}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>
);
