import React from 'react';
import NavBar from "../NavBar";
import {Box, CircularProgress, Grid, Paper, Stack, Typography} from "@mui/material";
import styles from './styles/styles';
import img from './test.png';
import PokemonStatsChart from "./PokemonStatsChart";
import Tag from "../homePage/Tag";
import PokemonDescription from "./PokemonDescription";
import {useQuery} from "@tanstack/react-query";
import {fetchPokemonDetails, getPokemonWeaknesses} from "../utils/http";
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

    // Fetch Pokémon weaknesses
    const {
        data: weaknesses,
        isPending: isWeaknessesPending,
        isError: isWeaknessesError,
        error: weaknessesError
    } = useQuery({
        queryKey: [`weaknesses${pokemonName}`],
        queryFn: () => getPokemonWeaknesses(pokemonName || '')
    });
    if (isWeaknessesError) return <div>Error: {weaknessesError.message}</div>;

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

    const filteredWeaknesses = weaknesses?.filter((weakness: string) => !pokemonTypes.includes(weakness));


    return (
        <div className='detailPage'>
            <NavBar/>
            <Box sx={styles.container}>
                <Paper sx={styles.paper}>
                    <Grid container alignItems="center" justifyContent="center" sx={{height: '20%'}}>
                        <Typography variant="h3">
                            {pokemonName?.toUpperCase()}
                        </Typography>
                    </Grid>

                    <Grid container direction='row'>
                        <Grid sx={styles.leftSideColumn}>
                            <Stack spacing={2} alignItems="center">
                                <img src={imageURL || img} style={{ width: '70%', height: 'auto' }}/>
                                <Stack spacing={1}>
                                    <h2>Stats</h2>
                                    <div style={{marginLeft: '-77px'}}>
                                        <PokemonStatsChart stats={stats}/>
                                    </div>
                                </Stack>
                            </Stack>
                        </Grid>

                        <Grid sx={styles.rightSideColumn}>
                            <Grid direction='row'>
                                <PokemonDescription
                                    height={height}
                                    weight={weight}
                                    id={id}
                                    abilities={abilities}
                                    moves={moves}
                                />

                                <Typography variant='h5' sx={{paddingBottom: '5px'}}>
                                    Type
                                </Typography>
                                {pokemonTypes.map(type => (
                                    <Tag key={type} label={type} type={type}/>
                                ))}

                                <Typography variant='h5' sx={{paddingBottom: '5px', paddingTop:'30px'}}>
                                    Weaknesses
                                </Typography>
                                {filteredWeaknesses?.map(weakness => (
                                    <Tag key={weakness} label={weakness} type={weakness}/>
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
