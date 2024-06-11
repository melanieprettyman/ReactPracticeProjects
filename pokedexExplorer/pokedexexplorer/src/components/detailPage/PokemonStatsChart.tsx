import React from 'react';

type Stat = {
    name: string;
    value: number;
};

type PokemonStatsProps ={
    stats: number[];
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
    const pokemonStats: Stat[] = [
        { name: 'HP', value: stats[0] },
        { name: 'Attack', value: stats[1] },
        { name: 'Defense', value: stats[2] },
        { name: 'SpecialAttack', value: stats[3] },
        { name: 'SpecialDefense', value: stats[4] },
        { name: 'Speed', value: stats[5] },
    ];

    return (
        <div>
            <ul>
                {pokemonStats.map((stat) => (
                    <li key={stat.name}>
                        {stat.name}: {stat.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonStats;
