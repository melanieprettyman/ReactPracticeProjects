import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, {useEffect, useState} from "react";
import {AppBar, Box, Button, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import styles from './styles/styles'
import {Pokemon} from "../homePage/PokemonContainer";
import PokemonItem from "../homePage/PokemonItem";
import CompareDialog from "./CompareDiaglog";
import {useNavigate} from "react-router";

/**
 * `ComparePage` is a React functional component that displays a list of favorited Pokémon, enables the user to select
 * up to five for detailed comparison, and shows a comparison dialog with selected Pokémon details.
 *
 * This component manages several pieces of state:
 * - `favorited`: The list of favorited Pokémon loaded from local storage.
 * - `selected`: The list of Pokémon currently selected for comparison.
 * - `selectionCount`: The count of currently selected Pokémon.
 * - `open`: A boolean state to control the visibility of the comparison dialog.
 *
 * It includes an AppBar for navigation and a button to trigger the comparison dialog.
 *
 * Features:
 * - Navigation back to the favorites page.
 * - Dynamically updates selection count as Pokémon are selected or deselected.
 * - Persists selected Pokémon in local storage.
 * - Uses `PokemonItem` components to render each Pokémon in the list.
 *
 * Usage:
 * This component is used within a route that is accessed via a "Compare" button on the 'favorites page'. It depends
 * on the `PokemonItem` component for rendering individual Pokémon and `CompareDialog` for showing the comparison dialog.
 *
 * Example usage:
 * <Route path="/compare" element={<ComparePage />} />
 *
 */

const ComparePage: React.FC = () => {
    //Retrieve list of favorite Pokémon from local storage
    const [favorited, setFavorited] = useState(() => {
        const localData = localStorage.getItem('favorites');
        return localData ? JSON.parse(localData) : [];
    });

    //Track Pokémon selected for comparison
    const [selected, setSelected] = useState<Pokemon[]>([]);

    const [selectionCount, setSelectionCount] = useState(0);

    //Track state of CompareDialog
    const [open, setOpen] = React.useState(false);

    const navigate = useNavigate();

    const handleSelection = (isSelected: boolean, pokemon: Pokemon) => {
        setSelectionCount(prevCount => isSelected ? prevCount + 1 : prevCount - 1);
        setSelected(currentSelected => {
            // Check if the Pokémon is already in the selected list
            const index = currentSelected.findIndex(p => p.name === pokemon.name);

            if (index > -1) {
                // If found, remove it from the list
                return currentSelected.filter((_, i) => i !== index);
            } else {
                // If not found, add it to the list
                return [...currentSelected, pokemon];
            }
        });
    };
    // Effect to update local storage when `selected` changes
    useEffect(() => {
        localStorage.setItem('selected', JSON.stringify(selected));
    }, [selected]);

    //Open CompareDialog
    const handleClickOpen = () => {
        setOpen(true);
    }
    //Close CompareDialog
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Box sx={{flexGrow: 1, backgroundColor: 'white', height: '100vh'}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                            onClick={() => navigate('/favorites')}
                        >
                            <ArrowBackIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Select Favorite Pokémon
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div>
                    <Typography variant='h6' sx={{paddingLeft: 10, paddingTop: 5}}>
                        Select up to 5 Pokémon to compare
                    </Typography>
                </div>
                <Grid container spacing={2} sx={styles.comparisonList}>
                    {favorited?.map((pokemon: Pokemon) => (
                        <PokemonItem
                            key={pokemon.name}
                            toggleType="compare"
                            onToggleSelection={handleSelection}
                            selectionCount={selectionCount}
                            pokemon={pokemon}
                        />
                    ))}
                </Grid>
            </Box>
            <AppBar position="fixed" color="primary" sx={{top: 'auto', bottom: 0}}>
                <Toolbar sx={{justifyContent: 'center'}}>
                    <Button
                        variant="contained"
                        sx={styles.button}
                        onClick={handleClickOpen}
                    >
                        <b>Compare {selectionCount} Pokémon</b>
                    </Button>
                </Toolbar>
            </AppBar>
            <CompareDialog open={open} handleClose={handleClose} selected={selected}/>
        </>
    );
}
export default ComparePage;