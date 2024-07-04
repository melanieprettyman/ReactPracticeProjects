import React from "react";
import {AppBar, Badge, Box, Button, IconButton, InputBase, Menu, MenuItem, Toolbar} from "@mui/material";
import styles from "../styles";
import logo from "../../../Utils/logo.png";
import {styled, ThemeProvider, alpha} from "@mui/material/styles";
import Theme from "../../landing/Theme/Theme";
import SearchIcon from '@mui/icons-material/Search';
import {AccountCircle} from "@mui/icons-material";
import AccountMenu from "./AccountMenu";
import GenreMenu from "./GenreMenu";
import PublishMenu from "./PublishMenu";
import SearchField from "./SearchField";


function Navigation() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    const handleSearchIconClick = () => {
        // Add your search handling logic here
        console.log("Search icon clicked");
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
        </Menu>
    );
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={styles.appbar}>
                <Toolbar sx={styles.toolbar}>
                    <img src={logo} alt="Plot Twists Logo" style={styles.img}/>
                    <GenreMenu />
                    <Button variant="text" sx={styles.tabs} color="primary">
                        Popular
                    </Button>
                    <SearchField handleSearchIconClick={handleSearchIconClick}/>
                    <Box sx={{flexGrow: 1}}/>
                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <PublishMenu />
                        <AccountMenu />
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}

const Navbar: React.FC = () => {
    return (
        <ThemeProvider theme={Theme}>
            <Navigation/>
        </ThemeProvider>
    );
}
export default Navbar;