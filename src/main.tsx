import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { theme } from '../src/styles/theme'
import { GlobalStyles } from './styles/global'
import { ApolloProvider } from '@apollo/client'
import { client } from './config/graphql'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)
