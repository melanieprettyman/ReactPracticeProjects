import React, {useContext, useEffect, useState} from 'react';
import {Box, Grid, Pagination, Typography} from '@mui/material';
import PokemonItem from "./PokemonItem";
import {useQuery} from "@tanstack/react-query";
import {fetchPokemons} from "../utils/http";
import {Context} from "../store/context";

/**
 * `PokemonContainer` is a component that displays a list of Pokémon. It supports pagination and provides functionality
 * to toggle Pokémon as favorites. This component integrates with the application's global context to handle search
 * queries and leverage local storage to persist favorite selections across sessions.
 *
 * The component fetches Pokémon data from a remote API and presents each Pokémon using the `PokemonItem` component.
 * It handles pagination through user interactions and updates the displayed list based on the current page.
 * Additionally, it offers the ability to display a single searched Pokémon if a search query exists in the context.
 *
 * Usage:
 * PokemonContainer is the main content of HomePage.
 *
 * Features:
 * - Fetches data using `@tanstack/react-query` for efficient data fetching and caching.
 * - Uses `Context` for accessing global state, such as search queries.
 * - Manages pagination state with a `Pagination` component from MUI.
 * - Saves and retrieves favorite Pokémon data from local storage.
 * - Conditionally renders search results or a full list based on the presence of a search query.
 *
 * Components:
 * - `PokemonItem`: Renders individual Pokémon items with favorite toggle functionality.
 * - `Pagination`: Allows users to navigate through different pages of Pokémon.
 * - `Box` and `Grid`: Used from MUI for layout and styling purposes.
 */

export type Pokemon = {
    name: string;
    url: string;
};


const PokemonContainer: React.FC = () => {
    //Init state for page (tracking which page to load), favorited (list of favorite Pokémon).
    const context = useContext(Context);
    const [page, setPage] = useState(1);
    const [favorited, setFavorited] = useState<Pokemon[]>(() => {
        const localData = localStorage.getItem('favorites');
        return localData ? JSON.parse(localData) : [];
    });

    const handleToggleFavoritePokemon = (pokemon: Pokemon): void => {
        setFavorited(currentFavorites => {
            // Check if the Pokémon is already in the favorites list
            const index = currentFavorites.findIndex(p => p.name === pokemon.name);

            if (index > -1) {
                // If found, remove it from the list
                return currentFavorites.filter((_, i) => i !== index);
            } else {
                // If not found, add it to the list
                return [...currentFavorites, pokemon];
            }
        });
    };

    // Effect to update local storage when `favorited` changes
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorited));
    }, [favorited]);

    //Fetch the list of Pokémon.
    const {data, isFetching, isError, error} = useQuery({
        queryKey: ['pokemons', page],
        queryFn: () => fetchPokemons(page),
    });

    //Handle user switching pages
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    if (isError) return <div>Error: {error instanceof Error ? error.message : "Unknown error"}</div>;

    //Retrieve the search query from context
    const searchQuery = context?.searchQuery ? context?.searchQuery : '';

    const searchPokemon: Pokemon = {
        name: searchQuery,
        url: `https://pokeapi.co/api/v2/pokemon/${searchQuery}`
    }

    return (
        <Box sx={{flexGrow: 1, padding: 10}}>
            <Grid container spacing={2}>
                {context?.isSearchQuery ? (
                    (
                        <PokemonItem
                            key={searchQuery}
                            toggleType="favorite"
                            pokemon={searchPokemon}
                            handleToggleFavoritePokemon={handleToggleFavoritePokemon}
                            isInitiallyFavorite={favorited.some(fav => fav.name === searchQuery)}
                        />
                    )
                ) : (
                    data?.map((pokemon: Pokemon) => (
                        <PokemonItem
                            key={pokemon.name}
                            toggleType="favorite"
                            pokemon={pokemon}
                            handleToggleFavoritePokemon={handleToggleFavoritePokemon}
                            isInitiallyFavorite={favorited.some(fav => fav.name === pokemon.name)}
                        />
                    ))
                )}
            </Grid>
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 2, width: '100%'}}>
                <Box sx={{backgroundColor: 'white', width: '22%', opacity: '.9', boxShadow: '0 0 8px 8px #ffffff'}}>
                    <Pagination
                        count={53}
                        variant="outlined"
                        shape="rounded"
                        page={page}
                        onChange={handleChange}
                        color='secondary'
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default PokemonContainer;
