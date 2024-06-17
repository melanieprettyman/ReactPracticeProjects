import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, {useEffect, useState} from "react";
import {AppBar, Box, Button, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import styles from './styles/styles'
import {Pokemon} from "../homePage/PokemonContainer";
import PokemonItem from "../homePage/PokemonItem";
import CompareDialog from "./CompareDiaglog";
import {useNavigate} from "react-router";



const ComparePage:React.FC=()=>{

    const [favorited, setFavorited] = useState(() => {
        const localData = localStorage.getItem('favorites');
        return localData ? JSON.parse(localData) : [];
    });

    const [selected, setSelected] = useState<Pokemon[]>([]);

    const [selectionCount, setSelectionCount] = useState(0);

    const handleSelection= (isSelected:boolean, pokemon: Pokemon) =>{
      setSelectionCount(prevCount => isSelected ? prevCount +1 : prevCount -1);
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

    const [open, setOpen] = React.useState(false);

    const handleClickOpen=() =>{
        setOpen(true);
    }
    const handleClose = () =>{
        setOpen(false);
    }
    const navigate = useNavigate();

    return(
    <>
    <Box sx={{flexGrow: 1, backgroundColor:'white', height: '100vh'}} >
        <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => navigate('/favorites')}
              >
              <ArrowBackIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Select Favorite Pokémon
              </Typography>
            </Toolbar>
          </AppBar>
        <div>
             <Typography variant='h6'sx={{paddingLeft: 10, paddingTop: 5}}>
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
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
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