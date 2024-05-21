import { AppBar, Tab, Tabs, Toolbar, useTheme } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useState } from "react";
import logo from './title.png';
import { rainbowTextStyle, tabsStyle } from "../styles/styles";

const NavBar: React.FC = () => {
    const theme = useTheme();
    const [value, setValue] = useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <AppBar position="fixed" sx={{ backgroundColor: theme.palette.primary.main }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <img src={logo} alt="Pokémon Explorer Logo" style={{ height: '50px' }}/>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                    sx={tabsStyle}
                >
                    <Tab
                        value="one"
                        label="Pokédex"
                        icon={<CatchingPokemonIcon/>}
                        aria-label="pokedex"
                        sx={{
                            ...(value === 'one' ? rainbowTextStyle : {})
                        }}
                    />
                    <Tab
                        value="two"
                        label="Saved"
                        icon={<FavoriteIcon/>}
                        aria-label="saved"
                        sx={{
                            ...(value === 'two' ? rainbowTextStyle : {})
                        }}
                    />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
