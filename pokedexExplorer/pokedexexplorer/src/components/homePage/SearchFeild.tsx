import React from "react";
import {Box, OutlinedInput} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchFeild: React.FC = ()=>{
    return(
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          margin: '20px auto', // Centers the search bar and adds vertical spacing
          width: '80%',
          maxWidth: '600px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
          borderRadius: '4px', // Rounded corners for aesthetic
        }}>
        <OutlinedInput
            sx={{ flex: 1, height: '40px', mr: 1, borderRadius: '4px' }}
            placeholder="Search Pokémon..."
        />
        <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
        </Box>
    );
}

export default SearchFeild;