import React from 'react';
import {Paper, Typography, Grid, CircularProgress} from '@mui/material';
import styles from "./styles/styles";
import {Ability, fetchPokemonDetails, fetchPokemonNature, Nature} from "../utils/http";
import {useQuery} from "@tanstack/react-query";

type Props ={
 height: number,
 weight:number,
 id:number,
 abilities: Ability[],
};

const PokemonDescription: React.FC<Props> = ({height,weight, abilities, id} ) => {
    const {
          data:nature,
          isPending,
          isError,
          error
        } = useQuery({
        queryKey: [`nature${id}`],
        queryFn: () => fetchPokemonNature(id)
  });

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
                  {nature && <Typography variant="body1" color="black">{nature.likes }</Typography>}

              </Grid>

              <Grid item xs={6}>
                <Typography variant="h6" color="white">Hates</Typography>
                  {nature && <Typography variant="body1" color="black">{nature.hates }</Typography>}
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

