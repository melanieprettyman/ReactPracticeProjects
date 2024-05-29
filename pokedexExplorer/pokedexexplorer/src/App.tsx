import React from 'react';
import './App.css';
import {BrowserRouter as Router, createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';
import HomePage from "./components/homePage/HomePage";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./components/styles/Theme";
import NavBar from "./components/NavBar";
import FavoritesPage from "./components/favoritesPage/FavoritesPage";
import Layout from "./components/Layout";
import ComparePage from "./components/comparePage/ComparePage";
import DetailPage from "./components/detailPage/DetailPage";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
          index:true,
          element:<HomePage />
        },
        {
          path:'/favorites',
          element:<FavoritesPage />
        }
      ]
    },
    {
        path:'/compare',
        element:<ComparePage />
    },
    {
        path:'/detail',
        element:<DetailPage />
    }
  ]);

  return (
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}/>
      </ThemeProvider>
  );
}

export default App;
