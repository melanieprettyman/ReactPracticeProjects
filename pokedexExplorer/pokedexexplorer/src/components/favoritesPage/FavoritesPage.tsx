import React from "react";
import {Box, Button, Grid, Stack} from "@mui/material";
import PokemonItem from "../homePage/PokemonItem";
import styles from "./styles/styles";
import {Link} from "react-router-dom";

const FavoritesPage: React.FC = () => {
    return(
        <div>
    <Box sx={{ flexGrow: 1, padding: 10 }}>
      <Grid container sx={{paddingTop:2}}>
          <Stack >
                <Button
                   variant="contained"
                   sx={styles.button}
                   component={Link} to="/compare"
               >
                  <b>Compare</b>
              </Button>
              <Grid container spacing={2} sx={{paddingTop:'20px'}}>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
                  <PokemonItem toggleType="favorite"/>
             </Grid>
          </Stack>
      </Grid>
    </Box>
        </div>
    );
}
export default FavoritesPage;