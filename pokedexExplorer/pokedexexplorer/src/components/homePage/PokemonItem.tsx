/**
 * Represents a single Pokémon item in a card format, providing interactive elements for favoriting or comparing.
 * The component fetches and displays details such as the Pokémon's types and image. Users can click the card to
 * navigate to the Pokémon's detail page if on the home page.
 *
 * Props:
 * - `toggleType`: Specifies the type of toggle to display ('favorite' or 'compare').
 * - `onToggleSelection`: Optional function called when the selection state changes, used in the compare toggle.
 * - `selectionCount`: Optional number of currently selected items, relevant for limiting selections in comparePage.
 * - `pokemon`: The Pokémon object to display, containing the name and URL for fetching additional details.
 * - `handleToggleFavoritePokemon`: Optional function to handle toggling the favorite status.
 * - `isInitiallyFavorite`: Indicates if the Pokémon is initially marked as a favorite.
 *
 * Behavior:
 * - Uses `useQuery` from `@tanstack/react-query` to fetch detailed Pokémon data like types and an image URL.
 * - Displays a loading spinner while data is being fetched and an error component if the fetch fails or returns no data.
 * - The card can be clicked to navigate to the corresponding detailPage of the Pokémon.
 * - The card shows a favorite or compare toggle depending on `toggleType`.
 *
 * Example usage:
 * <PokemonItem
 *   toggleType="favorite"
 *   pokemon={{ name: 'Pikachu', url: 'https://pokeapi.co/api/v2/pokemon/pikachu' }}
 *   handleToggleFavoritePokemon={handleFavorite}
 *   isInitiallyFavorite={true}
 * />
 *
 * This component integrates with routing via `useLocation` and `useNavigate` to handle navigation based on the app's current page.
 */
import React, {useState} from 'react';
import {Typography, Card, CardMedia, CardContent, Grid, CircularProgress, Box} from '@mui/material';
import img from '../utils/unkown.png';
import Tag from "./Tag";
import FavoriteToggle from "./FavoriteToggle";
import CompareToggle from "../comparePage/CompareToggle";
import {useLocation} from "react-router-dom";
import {useNavigate} from "react-router";
import styles from "./styles/styles";
import {Pokemon} from "./PokemonContainer";
import {fetchPokemonDetails} from "../utils/http";
import {useQuery} from "@tanstack/react-query";
import ErrorField from "../ErrorField";

type Props = {
    toggleType: 'favorite' | 'compare';
    onToggleSelection?: (isSelected: boolean, pokemon: Pokemon) => void;
    selectionCount?: number,
    pokemon: Pokemon;
    handleToggleFavoritePokemon?: (pokemon: Pokemon) => void,
    isInitiallyFavorite?: boolean,
};
const PokemonItem: React.FC<Props> = ({
                                          toggleType,
                                          onToggleSelection,
                                          selectionCount,
                                          pokemon,
                                          handleToggleFavoritePokemon,
                                          isInitiallyFavorite = false,

                                      }) => {

    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === '/';


    const [isSelected, setSelected] = useState(false);
    const [isFavorite, setFavorite] = useState(isInitiallyFavorite);


    const toggleSelection = () => {
        // @ts-ignore
        if (isSelected || (onToggleSelection && selectionCount < 5)) {
            setSelected(!isSelected);
            // @ts-ignore
            onToggleSelection(!isSelected, pokemon);
        }
    };

    const toggleFavorite = () => {
        setFavorite(prevState => !prevState);
        if (handleToggleFavoritePokemon) {
            handleToggleFavoritePokemon(pokemon);
        }
    };

    const handleCardClick = () => {
        if (isHomePage) {
            navigate(`/detail/${pokemon.name}`);
        }
    };

    const {data, isLoading, isError} = useQuery({
        queryKey: [`details${pokemon.name}`],
        queryFn: () => fetchPokemonDetails(pokemon.url)
    });

    if (isLoading) {
        return (
                <CircularProgress/>
        );
    }
    if (isError || !data) {
        return (
            <ErrorField/>
        );
    }


    const [
        pokemonTypes,
        imageURL
    ] = data;


    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card sx={isHomePage ? styles.card : {}}>
                <div style={{position: 'relative'}}>
                    <CardMedia
                        component="img"
                        height="auto"
                        image={imageURL ? imageURL : img}
                        alt="Pikachu"
                        onClick={handleCardClick} style={{cursor: 'pointer'}}
                    />
                    {toggleType === 'favorite' ? (
                        <FavoriteToggle isSelected={isFavorite} toggleSelection={toggleFavorite}/>
                    ) : (
                        <CompareToggle isSelected={isSelected} toggleSelection={toggleSelection}/>
                    )}
                </div>
                <CardContent onClick={handleCardClick} style={{cursor: 'pointer'}}>
                    <Typography gutterBottom variant="h5" component="div">
                        {pokemon.name.toUpperCase()}
                    </Typography>
                    {pokemonTypes?.map(type => (
                        <Tag key={type} label={type} type={type}/>
                    ))}
                </CardContent>
            </Card>
        </Grid>
    );
};

export default PokemonItem;
