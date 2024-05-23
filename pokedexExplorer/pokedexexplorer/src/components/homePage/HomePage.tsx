import React from 'react';
import NavBar from "./NavBar";
import PokemonContainer from "./PokemonContainer";
import SearchField from "./SearchField";


const HomePage: React.FC = () => {
  return (
      <div className='homePage'>
          <NavBar/>
          <div style={{marginTop: '100px'}}>
              <SearchField/>
              <PokemonContainer/>
          </div>
      </div>
  );
};

export default HomePage;
