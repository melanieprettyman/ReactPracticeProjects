import React, { useContext, useState } from "react";
import { Autocomplete, Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles/styles";
import { Context } from "../store/context";
import { pokemonNames } from "../utils/pokemonNames";

const SearchField: React.FC = () => {
    const context = useContext(Context);
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleInputChange = (event: React.SyntheticEvent<Element, Event>, value: string | null) => {
                    setSearchQuery(value ?? '');
    };

    const handleSearch = () => {
        const formattedQuery = searchQuery.toLowerCase().replace(/\s+/g, '');
        context?.handleSearch(formattedQuery);
    };

    return (
        <Box sx={styles.searchFieldContainer}>

            <Autocomplete
                freeSolo
                options={pokemonNames}
                value={searchQuery}
                onChange={handleInputChange}
                onInputChange={(event, value) => setSearchQuery(value)}
                sx={styles.searchField}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Search Pokémon..."
                        variant="outlined"
                    />
                )}
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
};

export default SearchField;
