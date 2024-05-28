import React from "react";
import {Box, Button, OutlinedInput, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../styles/Theme";
import styles from "./styles/styles";

const SearchField: React.FC = ()=>{
    return(
        <Box sx={styles.searchFieldContainer}>
        <OutlinedInput sx={styles.searchField} placeholder="Search Pokémon..."/>
        <Button variant="contained" sx={styles.button}>
            <SearchIcon sx={{ color: 'white' }} />
        </Button>
        </Box>
    );
}

export default SearchField;