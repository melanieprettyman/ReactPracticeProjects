import React, {useEffect, useState} from 'react';
import {Box, CircularProgress, Grid, Pagination} from '@mui/material';
import PokemonItem from "./PokemonItem";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemons } from "../utils/http";

export type Pokemon = {
    name: string;
    url: string;
};

const PokemonContainer: React.FC = () => {
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

    const { data, isFetching, isError, error } = useQuery({
        queryKey: ['pokemons', page],
        queryFn: () => fetchPokemons(page),
    });

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    if (isError) return <div>Error: {error instanceof Error ? error.message : "Unknown error"}</div>;

    console.log("Favorites", JSON.stringify(favorited));
    return (
        <Box sx={{ flexGrow: 1, padding: 10 }}>
            <Grid container spacing={2}>
                {data?.map((pokemon: Pokemon) => (
                    <PokemonItem
                        key={pokemon.name}
                        toggleType="favorite"
                        pokemon={pokemon}
                        handleToggleFavoritePokemon={handleToggleFavoritePokemon}
                        isInitiallyFavorite={favorited.some(fav => fav.name === pokemon.name)}
                    />
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 , width:'100%'}}>
                <Box sx={{backgroundColor:'white', width:'22%', opacity:'.9', boxShadow: '0 0 8px 8px #ffffff'}}>
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
