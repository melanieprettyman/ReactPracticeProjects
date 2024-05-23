import React from 'react';
import './App.css';
import HomePage from "./components/homePage/HomePage";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./components/styles/Theme";
import DetailPage from "./components/detailPage/DetailPage";
import NavBar from "./components/homePage/NavBar";
function App() {
  return (
      <div>
        <ThemeProvider theme={theme}>
        <DetailPage />
        </ThemeProvider>,
      </div>
  );
}

export default App;
