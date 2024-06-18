import React, {useState} from "react";
import {Box, Button, OutlinedInput, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../styles/Theme";
import styles from "./styles/styles";

type Props = {
    onSearch: (query: string) => void
}
const SearchField: React.FC<Props> = ({onSearch})=>{
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        onSearch(searchQuery);
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