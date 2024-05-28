import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, {useState} from "react";
import {AppBar, Box, Button, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import styles from './styles/styles'

import PokemonItem from "../homePage/PokemonItem";
import FullScreenDialog from "./CompareDiaglog";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
const ComparePage:React.FC=()=>{
    const [selectionCount, setSelectionCount] = useState(0);
    const handleSelectionCount= (isSelected:boolean) =>{
      setSelectionCount(prevCount => isSelected ? prevCount +1 : prevCount -1);
    };

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
    <Box sx={{flexGrow: 1, backgroundColor:'white'}} >
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
          {[...Array(10)].map((_,index)=>(
                <PokemonItem
                  key={index}
                  toggleType="compare"
                  onToggleSelection={handleSelectionCount}
                  selectionCount={selectionCount}
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
      <FullScreenDialog open={open} handleClose={handleClose} />
    </>
    );
}
export default ComparePage;