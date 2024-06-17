import React, {useEffect, useState} from "react";
import {Box, Button, Grid, Stack} from "@mui/material";
import PokemonItem from "../homePage/PokemonItem";
import styles from "./styles/styles";
import {Link} from "react-router-dom";
import {Pokemon} from "../homePage/PokemonContainer";

const FavoritesPage: React.FC = () => {
     const [favorited, setFavorited] = useState<Pokemon[]>(() => {
        const localData = localStorage.getItem('favorites');
        return localData ? JSON.parse(localData) : [];
    });
const handleToggleFavoritePokemon = (pokemon: Pokemon): void => {
        setFavorited(currentFavorites => {
            const index = currentFavorites.findIndex(p => p.name === pokemon.name);
            if (index > -1) {
                return currentFavorites.filter((_, i) => i !== index);
            }
            return currentFavorites;
        });
    };

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorited));
    }, [favorited]);

    return(
        <div>
    <Box sx={{ flexGrow: 1, padding: 10 }}>
      <Grid container sx={{paddingTop:2}}>
          <Stack sx={{ width: '100%', alignItems: 'flex-end' }}>
                <Button
                   variant="contained"
                   sx={styles.button}
                   component={Link} to="/compare"
               >
                  <b>Compare</b>
              </Button>
              <Grid container spacing={2} sx={{paddingTop:'20px'}}>
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