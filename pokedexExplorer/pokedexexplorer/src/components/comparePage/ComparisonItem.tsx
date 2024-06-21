import {Box, CircularProgress, Typography} from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import img from './test.png';
import PokemonStatsChart from "../detailPage/PokemonStatsChart";
import Tag from "../homePage/Tag";
import styles from "./styles/styles";
import {Pokemon} from "../homePage/PokemonContainer";
import {useQuery} from "@tanstack/react-query";
import {fetchPokemonDetails} from "../utils/http";

/**
 * Renders a detailed view of a single Pokémon for comparison purposes. This component
 * fetches detailed information about the specified Pokémon and displays various attributes
 * such as image, types, top moves, and abilities. It utilizes the `useQuery` hook from
 * `@tanstack/react-query` to asynchronously fetch Pokémon details and handle loading and error states.
 *
 * Props:
 *  - `pokemon`: Object containing the minimal data of a Pokémon, including its name.
 *
 * Example usage:
 * <ComparisonItem pokemon={{ name: "pikachu" }} />
 *
 * Components used:
 *  - `Box`: Used as the outer container for layout purposes.
 *  - `Typography`: For rendering text including Pokémon's name, stats, types, moves, and abilities.
 *  - `Divider`: Used to visually separate different sections of Pokémon details.
 *  - `CircularProgress`: Indicates loading state.
 *  - `Tag`: Custom component used to render each type aesthetically.
 *  - `PokemonStatsChart`: Custom component used to render a chart of the Pokémon's stats.
 */
type Props = {
    pokemon: Pokemon;
};
const ComparisonItem: React.FC<Props> = ({pokemon}) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;

    //Fetch pokemon details
    const {
        data: pokemonDetails,
        isPending,
        isError,
        error
    } = useQuery({
        queryKey: [`details${pokemon.name}`],
        queryFn: () => fetchPokemonDetails(url)
    });

    if (isPending) return <div><CircularProgress color="secondary"/></div>;
    if (isError) return <div>Error: {error.message}</div>;

    //Deconstruct the data returned from query
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

    const topMoves = moves.slice(0, 5);

    return (
        <Box sx={styles.comparisonItem}>
            <img src={imageURL || img} style={{width: '100%', height: 'auto'}}/>
            <Typography variant="h6" sx={{textAlign: 'center'}}>{pokemon.name.toUpperCase()}</Typography>
            <Divider sx={{width: '100%', my: 2}}/>

            <Typography variant="body1" sx={{textAlign: 'center'}}><b>Stats</b></Typography>
            <PokemonStatsChart stats={stats}/>
            <Divider sx={{width: '100%', my: 2}}/>
            <div>
                <Typography variant="body1" sx={{textAlign: 'center'}}><b>Type</b></Typography>
                {pokemonTypes.map(type => (
                    <span style={{marginTop: '5px'}}> {/* Adjust margin as needed */}
                        <Tag key={type} label={type} type={type}/>
                </span>
                ))}
            </div>
            <Divider sx={{width: '100%', my: 2}}/>

            <Typography variant="body1" sx={{textAlign: 'center'}}><b>Moves</b></Typography>
            {topMoves.map((move) =>
                <Typography variant="body1" color="black">{move.move.name}</Typography>
            )}

            <Divider sx={{width: '100%', my: 2}}/>

            <Typography variant="body1" sx={{textAlign: 'center'}}><b>Abilities</b></Typography>
            {abilities.map((ability) =>
                <Typography variant="body1" color="black">{ability.ability.name}</Typography>
            )}
        </Box>
    );
}

export default ComparisonItem;