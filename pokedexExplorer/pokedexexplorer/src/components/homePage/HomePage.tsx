import React from 'react';
import PokemonContainer from "./PokemonContainer";
import SearchField from "./SearchField";
import theme from "../styles/Theme";
import {ThemeProvider} from "@mui/material/styles";


const HomePage: React.FC = () => {
  return (
      <div className='homePage'>
          <div style={{marginTop: '100px'}}>
              <SearchField/>
              <PokemonContainer/>
          </div>
      </div>
  );
};

export default HomePage;
