
export type Pokemon = {
    name: string;
    url: string;
};

type PokemonType = {
    type: {
        name: string;
        url: string;
    };
};
type Stat = {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    };
};

type PokemonDetailsResponse = {
    name:string
    id:number,
    types: PokemonType[],
    stats: Stat[],
    sprites: {
        other: {
            "official-artwork": {
                front_default: string;
            }
        }
    },
    height: number,
    weight: number,
    abilities: Ability[],
    moves: Move[],

};

export type Move = {
    move:{
        name:string
    }
}
export type Ability ={
    ability:{
        name:string,
    }
};

type DescriptionResponse={
 descriptions:Description[]
};

type Description ={
    description: string,
    language:{
        name:string
    }
}

type NatureResponse  = {
   likes_flavor:{
       name:string | null
   },
    hates_flavor:{
       name:string | null
    }
};
export type Nature = {
    likes:string | null,
    hates:string | null
}

// export const fetchPokemons = async (): Promise<Pokemon[]> => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon?`);
//     if (!response.ok) {
//         throw new Error('Failed to fetch pokemons');
//     }
//     const data = await response.json();
//     return data.results;
// };

export const fetchPokemons = async (page: number ): Promise<Pokemon[]> => {
    const offset = page === 1 ? 0 : (page - 1) * 25;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=25`);
    if (!response.ok) {
        throw new Error('Failed to fetch pokemons');
    }
    const data = await response.json();
    return data.results;
};


export const fetchPokemonDetails = async (url: string): Promise<[string[], string, number[], number,number, Ability[], number, Move[] ]> => {
  const response = await fetch(url);
  if(!response.ok){
      const error =  new Error("[ERROR]: could not fetch pokemon details");
      error.message = await response.json();
      throw error;
  }
  const details: PokemonDetailsResponse = await response.json();
  const types = details.types.map((type: PokemonType) => type.type.name);
  const imageURL = details.sprites.other["official-artwork"].front_default;
  const stats = details.stats.map((stat: Stat) => stat.base_stat);
  const id = details.id;
  const abilities = details.abilities;
  const moves = details.moves;

  return [types, imageURL, stats, details.height, details.weight, abilities, id, moves];
};

export const fetchPokemonDescription = async (id: number): Promise<string> => {
  const response = await fetch(`https://pokeapi.co/api/v2/characteristic/${id}/`);
  if(!response.ok){
      const error =  new Error("[ERROR]: could not fetch pokemon description");
      error.message = await response.json();
      throw error;
  }
  const descriptionResponse: DescriptionResponse = await response.json();
  const englishDescription =  descriptionResponse.descriptions.filter(filterLanguage);
  return englishDescription[0].description;
};

export const fetchPokemonNature  = async (id: number): Promise<Nature> => {

const response = await fetch(`https://pokeapi.co/api/v2/nature/${id}/`);
  if(!response.ok){
      const error =  new Error("[ERROR]: could not fetch pokemon details");
      error.message = await response.json();
      throw error;
  }
  const natureResponse: NatureResponse = await response.json();
  const nature:Nature = {
      likes:natureResponse.likes_flavor ? natureResponse.likes_flavor.name : '',
      hates: natureResponse.hates_flavor ? natureResponse.hates_flavor.name : ''
  }

  return nature;
};

const filterLanguage= (description:Description)=>{
   return description.language.name === "en";
};
