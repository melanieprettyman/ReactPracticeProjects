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


type Genus = {
    genus: string;
    language: {
        name: string;
        url: string;
    };
};

type SpeciesData = {
    genera: Genus[];
};

type PokemonDetails = {
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
    id: number

};

export type Move = {
    move: {
        name: string
    }
}
export type Ability = {
    ability: {
        name: string,
    }
};

type DescriptionResponse = {
    descriptions: Description[]
};

type Description = {
    description: string,
    language: {
        name: string
    }
}

type NatureResponse = {
    likes_flavor: {
        name: string | null
    },
    hates_flavor: {
        name: string | null
    }
};
export type Nature = {
    likes: string | null,
    hates: string | null
}

// Function to fetch a Pokémon list with pagination.
export const fetchPokemons = async (page: number): Promise<Pokemon[]> => {
    const offset = (page - 1) * 25;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`);

    if (!response.ok) {
        const error = new Error('Failed to fetch pokemons');
        throw error;
    }
    const data = await response.json();
    return data.results;
};

//// Function to fetch detailed information about a single Pokémon.
export const fetchPokemonDetails = async (url: string): Promise<[string[], string, number[], number, number, Ability[], number, Move[]]> => {
    const response = await fetch(url);
    if (!response.ok) {
        const errorMessage = await response.text(); // Read response as text
        const error = new Error(`[ERROR]: could not fetch pokemon details - ${errorMessage}`);
        throw error;
    }
    const details: PokemonDetails = await response.json();
    const types = details.types.map((type: PokemonType) => type.type.name);
    const imageURL = details.sprites.other["official-artwork"].front_default;
    const stats = details.stats.map((stat: Stat) => stat.base_stat);
    const id = details.id;
    const abilities = details.abilities;
    const moves = details.moves;

    return [types, imageURL, stats, details.height, details.weight, abilities, id, moves];
};

// Function to fetch a Pokémon's nature based on its ID.
export const fetchPokemonNature = async (id: number): Promise<Nature> => {

    const response = await fetch(`https://pokeapi.co/api/v2/nature/${id}/`);
    if (!response.ok) {
        const error = new Error("[ERROR]: could not fetch pokemon details");
        error.message = await response.json();
        throw error;
    }
    const natureResponse: NatureResponse = await response.json();
    const nature: Nature = {
        likes: natureResponse.likes_flavor ? natureResponse.likes_flavor.name : '',
        hates: natureResponse.hates_flavor ? natureResponse.hates_flavor.name : ''
    }

    return nature;
};

// Function to fetch a Pokémon's types.
export const getPokemonTypes = async (pokemonName: string): Promise<string[]> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
        throw new Error('Failed to fetch Pokémon data');
    }
    const data = await response.json();
    return data.types.map((typeInfo: { type: { url: string } }) => typeInfo.type.url);
};

// Function to fetch a type's weaknesses.
export const getTypeWeaknesses = async (typeUrl: string): Promise<string[]> => {
    const response = await fetch(typeUrl);
    if (!response.ok) {
        throw new Error('Failed to fetch type data');
    }
    const data = await response.json();
    return data.damage_relations.double_damage_from.map((type: { name: string }) => type.name);
};

// Function to fetch a Pokémon's weaknesses.
export const getPokemonWeaknesses = async (pokemonName: string): Promise<string[]> => {
    const typeUrls = await getPokemonTypes(pokemonName);
    const weaknesses = new Set<string>();

    for (const url of typeUrls) {
        const typeWeaknesses = await getTypeWeaknesses(url);
        typeWeaknesses.forEach(weakness => weaknesses.add(weakness));
    }

    return Array.from(weaknesses);
};



