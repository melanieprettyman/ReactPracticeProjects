import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';
import styles from "./styles/styles";

// Define an interface for the component props
interface PokemonDescriptionProps {
  height: string;
  weight: string;
  category: string;
  abilities: string;
}

const PokemonDescription: React.FC<PokemonDescriptionProps> = ({ height, weight, category, abilities }) => {
  return (
      <div style={{paddingBottom:'50px'}}>
    <Paper elevation={2} sx={styles.description}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography variant="h6" color="white">Height</Typography>
          <Typography variant="body1">{height}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" color="white">Category</Typography>
          <Typography variant="body1">{category}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" color="white">Weight</Typography>
          <Typography variant="body1">{weight}</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" color="white">Abilities</Typography>
          <Typography variant="body1">{abilities}</Typography>
        </Grid>
      </Grid>
    </Paper>
        </div>
  );
};

export default PokemonDescription;
