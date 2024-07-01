
# Pokémon Explorer

Pokémon Explorer is a web application designed for Pokémon enthusiasts to explore and compare Pokémon. It provides detailed information about each Pokémon, such as stats, types, and abilities, and allows users to manage their favorite Pokémon.


## Features

- **Explore Pokémon:** Browse through a paginated list of Pokémon and view detailed information about each one.
- **Favorites:** Add or remove Pokémon from your favorites for easy access.
- **Compare:** Select multiple Pokémon and compare their stats in a side-by-side view.
- **Search:** Quickly find Pokémon with a search feature that filters results dynamically.

## Tech Stack

- React.js
- Material-UI: used for React components and styling
- React Router: used for navigation
- React Query: used for fetching and managing server state
- Recharts: used for rendering responsive and interactive statistical charts
- Custom Context: used for global state management
- Local storage: used for persisting favorite Pokémon selections and comparison data across browser sessions.


## Installation

After cloning the repo, install and run the project with npm

```bash
  cd pokemonexplorer
  npm install 
  npm start
```
    
## Demo

- **Home Page:** The home page displays a list of Pokémon. Each Pokémon card can be clicked to view more details. 
![Homepage Demo](https://github.com/melanieprettyman/ReactPracticeProjects/blob/main/pokedexExplorer/DemoImgs/Homepage_Demo.png)
    - The auto-suggest search bar allows users to search for a Pokémon by name.
    ![SearchBar Demo](https://github.com/melanieprettyman/ReactPracticeProjects/blob/main/pokedexExplorer/DemoImgs/Searchbar_demo.png)
    ![SearchBar Results Demo](https://github.com/melanieprettyman/ReactPracticeProjects/blob/main/pokedexExplorer/DemoImgs/SearchResults_demo.png)
    - Error handeling for search bar
    ![Error handleing Demo](https://github.com/melanieprettyman/ReactPracticeProjects/blob/main/pokedexExplorer/DemoImgs/Errorhandeling_demo.png) 

- **Favorites Page:** Access this page via the navigation bar to view your favorited Pokémon.
![Favorite Page Demo](https://github.com/melanieprettyman/ReactPracticeProjects/blob/main/pokedexExplorer/DemoImgs/Favoritespage_demo.png)

-**Compare Page:** Select up to five Pokémon from the Favorites page to compare their detailed stats.
![Compare Selection Demo](https://github.com/melanieprettyman/ReactPracticeProjects/blob/main/pokedexExplorer/DemoImgs/CompareSelection_demo.png)
![Compare Page Demo](https://github.com/melanieprettyman/ReactPracticeProjects/blob/main/pokedexExplorer/DemoImgs/Comparepage_demo.png)

-**Detail Page:** Click on any Pokémon card to view its comprehensive details including stats, types, abilities, and significant moves.
![Detail Page Demo](https://github.com/melanieprettyman/ReactPracticeProjects/blob/main/pokedexExplorer/DemoImgs/DetailPage_demo.png)
## API Reference

### Pokemon Data Fetching from https://pokeapi.co/

#### Fetch list of Pokemons

```http
GET https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `offset` | `number` | **Required**. Offset for the list of Pokemons.|

#### Fetch Pokemon Details

#### Fetch Pokemon Details

```http
  GET ${url}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `url`      | `string` | **Required**. URL to fetch details for a Pokemon.|

#### Fetch Pokemon Nature

```http
  GET https://pokeapi.co/api/v2/nature/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Required**. ID of the Pokemon for nature to fetch.|

#### getPokemonWeaknesses(pokemonName: string): Promise<string[]>

Takes the name of a Pokémon and returns a promise that resolves to an array of its weaknesses.

