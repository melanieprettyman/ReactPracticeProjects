import React, {useEffect, useState} from "react";
import {Box, Button, Grid, Stack} from "@mui/material";
import PokemonItem from "../homePage/PokemonItem";
import styles from "./styles/styles";
import {Link} from "react-router-dom";
import {Pokemon} from "../homePage/PokemonContainer";
/**
 * `FavoritesPage` is a component that displays a list of favorited PokémonItem's and allows the user
 * to manage these favorites. It uses local storage to persist the list of favorited Pokémon across sessions.
 *
 * The component provides functionality to:
 * - Load favorited Pokémon from local storage when the component mounts.
 * - Remove a Pokémon from the list of favorites.
 * - Navigate to a comparison page with the favorited Pokémon.
 *
 * Example usage:
 * Routed to in NavBar
 *
 * Local Storage:
 * - The component loads the list of favorite Pokémon from local storage when it mounts.
 * - The component updates local storage whenever the list of favorite Pokémon changes.
 *
 * Components used:
 * - `Box`: Used as the outer container for layout purposes.
 * - `Grid`: Organizes content into a structured layout for better readability.
 * - `Stack`: Arranges the Compare button and the list of favorite Pokémon items.
 * - `Button`: Used for navigation to the compare page.
 * - `PokemonItem`: A custom component used to render each Pokémon in the list.
 */
const FavoritesPage: React.FC = () => {
    //load the list of favorite Pokémon from local storage when page mounts
    const [favorited, setFavorited] = useState<Pokemon[]>(() => {
        const localData = localStorage.getItem('favorites');
        return localData ? JSON.parse(localData) : [];
    });
    //Handle the removal of a Pokémon from the favorites' list when "unfavorite"
    const handleToggleFavoritePokemon = (pokemon: Pokemon): void => {
        setFavorited(currentFavorites => {
            const index = currentFavorites.findIndex(p => p.name === pokemon.name);
            if (index > -1) {
                return currentFavorites.filter((_, i) => i !== index);
            }
            return currentFavorites;
        });
    };

    //Update local storage whenever the list of favorite Pokémon changes
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorited));
    }, [favorited]);

    return (
        <div>
            <Box sx={{flexGrow: 1, padding: 10}}>
                <Grid container sx={{paddingTop: 2}}>
                    <Stack sx={{width: '100%', alignItems: 'flex-end'}}>
                        <Button
                            variant="contained"
                            sx={styles.button}
                            component={Link} to="/compare"
                        >
                            <b>Compare</b>
                        </Button>
                        <Grid container spacing={2} sx={{paddingTop: '20px'}}>
                            {favorited.map((pokemon) => (
                                <PokemonItem
                                    key={pokemon.name}
                                    pokemon={pokemon}
                                    toggleType="favorite"
                                    isInitiallyFavorite={true}
                                    handleToggleFavoritePokemon={handleToggleFavoritePokemon}
                                />
                            ))}

                        </Grid>
                    </Stack>
                </Grid>
            </Box>
        </div>
    );
}
export default FavoritesPage;