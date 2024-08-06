import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import { alpha } from "@mui/material/styles";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../../Theme/Theme";

type SearchProps = {
    handleSearchIconClick: () => void;
};

const SearchField: React.FC<SearchProps> = ({ handleSearchIconClick }) => {
    return (
        <Box
            sx={{
                position: 'relative',
                borderRadius: (theme) => theme.shape.borderRadius,
                backgroundColor: (theme) => alpha(theme.palette.common.white, 0.15),
                '&:hover': {
                    backgroundColor: (theme) => alpha(theme.palette.common.white, 0.25),
                },
                marginLeft: 0,
                width: 400,
                [theme.breakpoints.up('sm')]: {
                    marginLeft: (theme) => theme.spacing(3),
                    width: 'auto',
                },
            }}
        >
            <TextField
                placeholder="Search…"
                variant="standard"
                fullWidth
                InputProps={{
                    disableUnderline: true, // Disable the underline
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton onClick={handleSearchIconClick}>
                                <SearchIcon sx={{ color: 'black', fontSize: 30 }} />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '& .MuiInputBase-root': {
                        color: 'black',
                        fontSize: 20,
                        '& input': {
                            padding: (theme) => theme.spacing(1, 1, 1, 0),
                            paddingLeft: `calc(1em + ${(theme:any) => theme.spacing(4)})`,
                        },
                        '&:before, &:after': {
                            borderBottom: 'none !important',
                        },
                        '&:focus': {
                            outline: 'none',
                        },
                    },
                    width: '100%',
                    [theme.breakpoints.up('md')]: {
                        width: '50ch', // Extend the width as needed
                    },
                }}
            />
        </Box>
    );
};

export default SearchField;
