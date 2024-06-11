import React from 'react';
import {Paper, Typography, Grid, CircularProgress} from '@mui/material';
import styles from "./styles/styles";
import {Ability, Nature} from "../utils/http";

type Props ={
 height: number,
 weight:number,
 abilities: Ability[],
 nature: Nature
};

const PokemonDescription: React.FC<Props> = ({height,weight, abilities, nature} ) => {

  return (
      <div style={{paddingBottom:'50px'}}>
          <Paper elevation={2} sx={styles.description}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="h6" color="white">Height</Typography>
                <Typography variant="body1" color="black">{height/10} m</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" color="white">Weight</Typography>
                <Typography variant="body1" color="black">{weight/10} kg</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" color="white">Likes</Typography>
                <Typography variant="body1" color="black">{nature.likes }</Typography>

              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6" color="white">Hates</Typography>
                 <Typography variant="body1" color="black">{nature.hates }</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6" color="white">Abilities</Typography>
                  {abilities.map( (ability)=>
                      <Typography variant="body1" color="black">{ability.ability.name}</Typography>
                  )}
              </Grid>
            </Grid>
          </Paper>
        </div>
  );
};

export default PokemonDescription;

