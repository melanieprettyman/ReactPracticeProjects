import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#5B2981ff',
    },
    secondary: {
      main: '#fffff',
    },
  },
  typography:{
    fontFamily: "sans-serif",
  }
});

export default Theme;