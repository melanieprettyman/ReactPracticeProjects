import React from 'react';
import NavBar from "../NavBar";
import {Box, CircularProgress, Grid, Paper, Stack, Typography} from "@mui/material";
import styles from './styles/styles';
import img from './test.png';
import PokemonStatsChart from "./PokemonStatsChart";
import Tag from "../homePage/Tag";
import PokemonDescription from "./PokemonDescription";
import {useQuery} from "@tanstack/react-query";
import {fetchPokemonDetails} from "../utils/http";
import {useParams} from "react-router";

/**
 * `DetailPage` is a component that displays detailed information about a specific Pokémon. This page includes the
 * Pokémon's stats, types, and a full description.
 *
 * DetailPage fetches detailed information about a Pokémon using its name from the URL parameters.
 *
 * Data Fetching:
 * - Uses the `useQuery` hook from `@tanstack/react-query` to asynchronously fetch the Pokémon's details from the PokéAPI.
 * - Handles loading and error states with appropriate UI feedback.
 *
 * Component Structure:
 * - `NavBar`: A navigation bar component for site navigation.
 * - `Box`: Serves as the main container for page content, styled with Material-UI.
 * - `Paper`: Provides a Material-UI paper background for content.
 * - `PokemonStatsChart`: A custom component that displays a chart of the Pokémon's stats.
 * - `PokemonDescription`: A component that renders detailed descriptions of the Pokémon's attributes.
 * - `Tag`: A component used to display each type of the Pokémon.
 *
 * Layout:
 * The layout is divided into two main columns:
 * - Left column: Displays the Pokémon's image and its statistical charts.
 * - Right column: Shows detailed descriptions including height, weight, abilities, and types.
 *
 * Usage:
 * This component should be used within a route when clicking on the PokemonItem, that passes a Pokémon's name
 * as a URL parameter.
 * <Route path="/pokemon/:pokemonName" element={<DetailPage />} />
 */

const DetailPage: React.FC = () => {
    //Extract Pokémon name from url
    const {pokemonName} = useParams();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    //Fetch Pokemon's detaisl
    const {
        data: pokemonDetails,
        isPending,
        isError,
        error
    } = useQuery({
        queryKey: [`details${pokemonName}`],
        queryFn: () => fetchPokemonDetails(url)
    });

    if (isPending) return <div><CircularProgress color="secondary"/></div>;
    if (isError) return <div>Error: {error.message}</div>;

    //Destructuring query data for Pokemon details
    const [
        pokemonTypes,
        imageURL,
        stats,
        height,
        weight,
        abilities,
        id,
        moves
    ] = pokemonDetails;


    return (
        <div className='detailPage'>
            <NavBar/>
            <Box sx={styles.container}>
                <Paper sx={styles.paper}>
                    <Grid container alignItems="center" justifyContent="center" sx={{height: '30%'}}>
                        <Typography variant="h3">
                            {pokemonName?.toUpperCase()}

                        </Typography>
                    </Grid>

                    <Grid container direction='row' sx={{paddingTop: "50px"}}>
                        <Grid sx={styles.leftSideColumn}>
                            <Stack spacing={2}>
                                <img src={imageURL || img} className='img'/>
                                <h2>Stats</h2>
                                <PokemonStatsChart stats={stats}/>
                            </Stack>
                        </Grid>

                        <Grid sx={styles.rightSideColumn}>
                            <Grid direction='row'>
                                <Typography sx={{paddingBottom: '50px'}}></Typography>

                                <PokemonDescription height={height} weight={weight} id={id} abilities={abilities}
                                                    moves={moves}/>

                                <Typography variant='h5' sx={{paddingBottom: '10px'}}>
                                    Type
                                </Typography>
                                {pokemonTypes.map(type => (
                                    <Tag key={type} label={type} type={type}/>
                                ))}
                            </Grid>
                        </Grid>

                    </Grid>
                </Paper>
            </Box>
        </div>
    );
};

export default DetailPage;
