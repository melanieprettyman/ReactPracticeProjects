import React from "react";
import {Box, Button, OutlinedInput} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../styles/Theme";

const SearchField: React.FC = ()=>{
    return(
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          margin: '20px auto',
          width: '80%',
          maxWidth: '600px',
          backgroundColor: 'transparent',
          borderRadius: '4px',
        }}>
        <OutlinedInput
            sx={{ flex: 1, height: '40px', mr: 1, borderRadius: '4px', backgroundColor: 'white' }}
            placeholder="Search Pokémon..."
        />
        <Button
            variant="contained"
            sx={{
                backgroundColor: theme.palette.error.main,
                width: '40px', // You can specify a width
                minWidth: '40px', // Prevents the button from becoming too narrow
                padding: '6px 10px', // Adds padding to adjust visual appearance
            }}
        >
            <SearchIcon sx={{ color: 'white' }} />
        </Button>
        </Box>
    );
}

export default SearchField;