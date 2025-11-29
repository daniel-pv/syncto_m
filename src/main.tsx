import './index.css'

import { StyledEngineProvider, ThemeProvider } from '@mui/material'

import App from './App.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { myTheme as theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
