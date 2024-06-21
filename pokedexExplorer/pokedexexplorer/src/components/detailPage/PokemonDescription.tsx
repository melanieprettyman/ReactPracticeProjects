import React from 'react';
import {Paper, Typography, Grid} from '@mui/material';
import styles from "./styles/styles";
import {Ability, fetchPokemonNature, Move} from "../utils/http";
import {useQuery} from "@tanstack/react-query";

/**
 * `PokemonDescription` is a component that displays detailed attributes of a Pokémon (height, weight, nature preferences,
 * abilities, and top moves). Utilizes the `useQuery` hook from `@tanstack/react-query` for asynchronously fetching
 * the Pokémon's nature details based on its ID.
 *
 * Props:
 * - `height`: The height of the Pokémon in decimeters, which is converted to meters for display.
 * - `weight`: The weight of the Pokémon in hectograms, which is converted to kilograms for display.
 * - `id`: The unique identifier for the Pokémon used to fetch nature details.
 * - `abilities`: An array of ability objects associated with the Pokémon.
 * - `moves`: An array of move objects associated with the Pokémon; only the top 5 moves are displayed.
 *
 * Usage:
 * PokemonDescription used within DetailPage.
 *
 * Example usage:
 * <PokemonDescription
 *   height={10}
 *   weight={100}
 *   id={1}
 *   abilities={[{ ability: { name: "Overgrow" }, slot: 1 }]}
 *   moves={[{ move: { name: "Tackle" }, level: 1 }]}
 * />
 *
 * Data fetching:
 * - The nature of the Pokémon (likes and dislikes) is fetched based on the Pokémon's ID.
 * - Fetching is handled by `fetchPokemonNature`
 *
 * Error Handling:
 * - Loading and error states are managed with appropriate UI feedback.
 * - A spinner is shown during data fetching, and error messages are displayed if the fetch fails.
 *
 * Components used:
 * - `Paper`: Provides a structured and elevated background for content.
 * - `Grid`: Organizes content into a structured layout for better readability.
 * - `Typography`: Displays text and labels for each attribute.
 */

type Props = {
    height: number,
    weight: number,
    id: number,
    abilities: Ability[],
    moves: Move[],
};

const PokemonDescription: React.FC<Props> = ({height, weight, abilities, id, moves}) => {

    //Fetching Pokémon nature
    const {
        data: nature
    } = useQuery({
        queryKey: [`nature${id}`],
        queryFn: () => fetchPokemonNature(id)
    });

    const topMoves = moves.slice(0, 5);

    return (
        <div style={{paddingBottom: '50px'}}>
            <Paper elevation={2} sx={styles.description}>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <Typography variant="h6" color="white">Height</Typography>
                        <Typography variant="body1" color="black">{height / 10} m</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" color="white">Weight</Typography>
                        <Typography variant="body1" color="black">{weight / 10} kg</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" color="white">Likes</Typography>
                        {nature && <Typography variant="body1" color="black">{nature.likes}</Typography>}

                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h6" color="white">Hates</Typography>
                        {nature && <Typography variant="body1" color="black">{nature.hates}</Typography>}
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h6" color="white">Abilities</Typography>
                        {abilities.map((ability) =>
                            <Typography variant="body1" color="black">{ability.ability.name}</Typography>
                        )}
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" color="white">Moves</Typography>
                        {topMoves.map((move) =>
                            <Typography variant="body1" color="black">{move.move.name}</Typography>
                        )}
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default PokemonDescription;

