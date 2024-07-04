import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from "../styles";
import {Box} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import {AccountCircle} from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const genre: string[] = [
    "Original", "Adventure", "Fanfiction", "Horror", "Mystery", "Paranormal",
    "Science Fiction", "Thriller", "Contemporary", "Fantasy", "Humor", "New Adult",
    "Werewolf", "Vampire", "Historical Fiction", "LGBTQ+", "Non-Fiction", "Romance", "Teen Fiction"
];
export default function GenreMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="List of genre">
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={styles.tabs}
                        color="primary"
                    >
                        Genre
                        <ArrowDropDownIcon sx={{fontSize: 40}}/>
                    </Button>
                </Tooltip>
            </Box>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        width: 300,
                        padding: 2,
                        '& .MuiAvatar-root': {
                            width: 200,
                            height: 200,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 160,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'center', vertical: 'top'}}
                anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}

            >
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1}}>
                    {genre.map((genre, index) =>
                        <MenuItem key={index} onClick={handleClose}>{genre}</MenuItem>
                    )}
                </Box>
            </Menu>

        </>
    );
}