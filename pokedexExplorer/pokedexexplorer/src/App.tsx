/**
 * App wraps all other components in the application.
 *
 * Structure:
 * - RouterProvider: Manages routing based on defined paths and associated components.
 * - ThemeProvider: Provides a theme context for Material-UI components.
 * - QueryClientProvider: Sets up React Query for efficient server state management in React.
 * - SearchContextProvider: Provides a context for managing search-related state across components.
 *
 * Routes:
 * - `/`: The root path that renders the `HomePage` within the `Layout` component.
 * - `/favorites`: Renders the `FavoritesPage` for showing favorited Pokémon.
 * - `/compare`: Directly renders the `ComparePage` for comparing Pokémon.
 * - `/detail/:pokemonName`: Renders the `DetailPage` for showing detailed information about a specific Pokémon.
 */
import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./components/homePage/HomePage";
import {ThemeProvider} from '@mui/material/styles';
import theme from "./components/styles/Theme";
import FavoritesPage from "./components/favoritesPage/FavoritesPage";
import Layout from "./components/Layout";
import ComparePage from "./components/comparePage/ComparePage";
import DetailPage from "./components/detailPage/DetailPage";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SearchContextProvider} from "./components/store/context";

function App() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>
                },
                {
                    path: '/favorites',
                    element: <FavoritesPage/>
                }
            ]
        },
        {
            path: '/compare',
            element: <ComparePage/>
        },
        {
            path: '/detail/:pokemonName',
            element: <DetailPage/>
        }
    ]);

    const queryClient = new QueryClient();
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <SearchContextProvider>
                    <RouterProvider router={router}/>
                </SearchContextProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
