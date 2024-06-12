import React, {useEffect, useState} from 'react';
import NavBar from "../NavBar";
import {Box, CircularProgress, Grid, Paper, Stack, Typography} from "@mui/material";
import styles from './styles/styles';
import img from './test.png';
import PokemonStatsChart from "./PokemonStatsChart";
import Tag from "../homePage/Tag";
import PokemonDescription from "./PokemonDescription";
import {useQuery} from "@tanstack/react-query";
import {fetchPokemonDescription, fetchPokemonDetails} from "../utils/http";
import {useParams} from "react-router";


const DetailPage: React.FC = () => {
const { pokemonName } = useParams();
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;


  const {
    data:pokemonDetails,
    isPending,
    isError,
    error
  } = useQuery({
    queryKey: [`details${pokemonName}`],
    queryFn: () => fetchPokemonDetails(url)
  });

  if (isPending) return <div><CircularProgress color="secondary"/></div>;
  if (isError) return <div>Error: {error.message}</div>;

  const [
    pokemonTypes,
    imageURL,
    stats,
    height,
    weight,
    abilities,
    id,
    description
  ] = pokemonDetails;


  return (
    <div className='detailPage'>
      <NavBar />
      <Box sx={styles.container}>
        <Paper sx={styles.paper}>
          <Grid container alignItems="center" justifyContent="center" sx={{ height: '30%' }}>
            <Typography variant="h3">
              {pokemonName}
            </Typography>
          </Grid>

          <Grid container direction='row' sx={{ paddingTop: "50px" }}>
            <Grid sx={styles.leftSideColumn}>
              <Stack spacing={2}>
                <img src={imageURL || img} className='img'/>
                <h2>Stats</h2>
                <PokemonStatsChart stats={stats}/>
              </Stack>
            </Grid>

            <Grid sx={styles.rightSideColumn}>
              <Grid direction='row' >
                <Typography sx={{ paddingBottom: '50px' }}>{description}</Typography>

                <PokemonDescription height={height} weight={weight} id={id} abilities={abilities} />

                <Typography variant='h5' sx={{ paddingBottom: '10px' }}>
                  Type
                </Typography>
                {pokemonTypes.map(type => (
                        <Tag key={type} label={type} type={type} />
                ))}
                <Typography variant='h5' sx={{ paddingTop: '20px', paddingBottom: '10px' }}>
                  Weaknesses
                </Typography>
                <Tag label="Ground" type="Ground" />
              </Grid>
            </Grid>

          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default DetailPage;
