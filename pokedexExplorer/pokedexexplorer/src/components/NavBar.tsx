import React from 'react';
import { AppBar, Tab, Tabs, Toolbar, useTheme } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import logo from './utils/title.png';
import { rainbowTextStyle, tabsStyle } from "./styles/styles";

const NavBar: React.FC = () => {
    const theme = useTheme();
    const location = useLocation();

    const currentPath = location.pathname;

    return (
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <img src={logo} alt="Pokémon Explorer Logo" style={{ height: '50px' }} />
                <Tabs
                    value={currentPath}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    sx={tabsStyle}
                >
                    <Tab
                        component={Link}
                        to="/"
                        value="/"
                        label="Pokédex"
                        icon={<CatchingPokemonIcon />}
                        aria-label="pokedex"
                        sx={{
                            ...(currentPath === "/" ? rainbowTextStyle : {})
                        }}
                    />
                    <Tab
                        component={Link}
                        to="/favorites"
                        value="/favorites"
                        label="Favorites"
                        icon={<FavoriteIcon />}
                        aria-label="saved"
                        sx={{
                            ...(currentPath === "/favorites" ? rainbowTextStyle : {})
                        }}
                    />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
