import React from 'react';
import NavBar from "./NavBar";
import PokemonContainer from "./PokemonContainer";
import SearchFeild from "./SearchFeild";


const HomePage: React.FC = () => {
  return (
      <div className='homePage'>
        <SearchFeild />
        <PokemonContainer />
      </div>
  );
};

export default HomePage;
