import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ComparisonItem from "./ComparisonItem";
import {Box, Stack} from "@mui/material";
import styles from "./styles/styles";
import {Pokemon} from "../homePage/PokemonContainer";


/**
 * `CompareDialog`displays a fullscreen dialog containing a list of selected Pokémon for comparison.
 * This dialog uses a sliding transition from the bottom and includes an AppBar with a back button to close the dialog.
 *
 * Props:
 * - `open` (boolean): Determines if the dialog is open.
 * - `handleClose` (function): A function to call when the dialog should be closed, e.g., when the back button is pressed.
 * - `selected` (array of Pokemon): An array of Pokémon objects that are currently selected for comparison.
 *
 * Example usage:
 * <CompareDialog
 *   open={isOpen}
 *   handleClose={() => setOpen(false)}
 *   selected={selectedPokemon}
 * />
 *
 * Component structure:
 * - `Dialog`: The container that provides the fullscreen dialog functionality.
 * - `AppBar`: Contains the toolbar with a back button for closing the dialog.
 * - `Box`: A box for additional textual content or headers.
 * - `Stack`: A horizontally oriented stack that holds individual `ComparisonItem` components for each selected Pokémon.
 *
 * Each `ComparisonItem` represents a single Pokémon and shows details pertinent to comparison.
 */

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
    open: boolean,
    handleClose: () => void;
    selected: Pokemon[];
}
const CompareDialog: React.FC<Props> = ({open, handleClose, selected}) => {

    return (
        <React.Fragment>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <ArrowBackIcon/>
                        </IconButton>
                        <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                            Back
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box sx={styles.header}>
                    <Typography variant='h4'> Compare Favorite Pokemon </Typography>
                </Box>
                <Stack
                    direction="row"
                    spacing={1}
                    divider={<Divider orientation="vertical" flexItem/>}
                    sx={{paddingTop: '20px', paddingLeft:'5px'}}
                >
                    {selected?.map((pokemon: Pokemon) => (
                        <ComparisonItem
                            key={pokemon.name}
                            pokemon={pokemon}
                        />
                    ))}

                </Stack>
            </Dialog>
        </React.Fragment>
    );
}

export default CompareDialog;