import React from 'react';
import { Box, Grid } from '@mui/material';
import PokemonItem from "./PokemonItem";

const PokemonContainer: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 10 }}>
      <Grid container spacing={2}>
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      <PokemonItem />
      </Grid>
    </Box>
  );
};

export default PokemonContainer;
