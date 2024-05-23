import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fcfcfc',
    },
    secondary: {
      main: '#000000',
    },
  },
  typography:{
    fontFamily: "sans-serif",
  }
});

export default theme;