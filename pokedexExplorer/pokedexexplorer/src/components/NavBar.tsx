/**
 * The NavBar component provides a responsive navigation bar with dynamic tab selections
 * for different sections of Pokémon application.
 *
 * Functionality:
 * - Uses the `useTheme` hook to access the current theme, particularly to set the AppBar's background color.
 * - Utilizes `useLocation` to determine the current URL path for highlighting the active tab.
 * - Integrates with the global application context to manage search-related states.
 *
 * Features:
 * - Dynamic tab highlighting based on the current route using the `location.pathname`.
 * - The Pokédex tab can reset the application's search state when clicked
 * - Custom icons and labels for each navigation tab.
 *
 * Usage:
 * - This component at the top of the application layout, providing consistent navigation across different views.
 */
import React, {useContext} from 'react';
import {AppBar, Tab, Tabs, Toolbar, useTheme} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import {Link, useLocation} from 'react-router-dom';
import logo from './utils/title.png';
import {rainbowTextStyle, tabsStyle} from "./styles/styles";
import {Context} from "./store/context";

const NavBar: React.FC = () => {
    const theme = useTheme();
    const location = useLocation();

    const currentPath = location.pathname;
    const context = useContext(Context);
    const resetSearch = () => {
        context?.setIsSearchQuery(false);
        context?.setSearchQuery('');
    };

    return (
        <AppBar position="fixed" sx={{backgroundColor: theme.palette.primary.main}}>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <img src={logo} alt="Pokémon Explorer Logo" style={{height: '50px'}}/>
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
                        icon={<CatchingPokemonIcon/>}
                        aria-label="pokedex"
                        sx={{
                            ...(currentPath === "/" ? rainbowTextStyle : {})
                        }}
                        onClick={resetSearch}
                    />
                    <Tab
                        component={Link}
                        to="/favorites"
                        value="/favorites"
                        label="Favorites"
                        icon={<FavoriteIcon/>}
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
