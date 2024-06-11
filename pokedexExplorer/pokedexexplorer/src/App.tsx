import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./components/homePage/HomePage";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./components/styles/Theme";
import FavoritesPage from "./components/favoritesPage/FavoritesPage";
import Layout from "./components/Layout";
import ComparePage from "./components/comparePage/ComparePage";
import DetailPage from "./components/detailPage/DetailPage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

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
        path:'/detail/:pokemonName',
        element:<DetailPage />
    }
  ]);

  const queryClient = new QueryClient();
  return (
      <ThemeProvider theme={theme}>
         <QueryClientProvider client={queryClient}>
             <RouterProvider router={router}/>
         </QueryClientProvider>
      </ThemeProvider>
  );
}

export default App;
