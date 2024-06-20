import React, {useContext, useState} from "react";
import {Box, Button, OutlinedInput, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../styles/Theme";
import styles from "./styles/styles";
import {Context} from "../store/context";

const SearchField: React.FC = ()=>{

    const context = useContext(Context);

    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        context?.handleSearch(searchQuery);
    };
    return(
        <Box sx={styles.searchFieldContainer}>
        <OutlinedInput
            sx={styles.searchField}
            placeholder="Search Pokémon..."
            value={searchQuery}
            onChange={handleInputChange}
        />
        <Button
            variant="contained"
            sx={styles.button}
            onClick={handleSearch}
        >
            <SearchIcon sx={{ color: 'white' }} />
        </Button>
        </Box>
    );
}

export default SearchField;