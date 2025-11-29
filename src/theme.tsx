import { createTheme } from '@mui/material/styles';

export const myTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00adb5',
      light: '#00e9f5',
      dark: '#00747a',
      contrastText: '#222831',
    },
    secondary: {
      main: '#ff204e',
      light: '#ff5c7c',
      dark: '#e0002d',
      contrastText: '#eeeeee',
    },
    error: {
      main: '#cc3232',
      contrastText: '#eeeeee',
    },
    warning: {
      main: '#d9b300',
    },
    success: {
      main: '#1aab40',
    },
    info: {
      main: '#7860bd',
      contrastText: '#eeeeee',
    },
    background: {
      default: '#ffffff',
      paper: '#fafafa',
    },
  },
});