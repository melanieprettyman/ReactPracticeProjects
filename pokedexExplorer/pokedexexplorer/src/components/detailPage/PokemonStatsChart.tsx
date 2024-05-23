import React from 'react';

// Define a type for the stat items
type Stat = {
    name: string;
    value: number;
};

// Sample stats data
const sampleStats: Stat[] = [
    { name: 'HP', value: 45 },
    { name: 'Attack', value: 49 },
    { name: 'Defense', value: 49 },
    { name: 'SpecialAttack', value: 65 },
    { name: 'SpecialDefense', value: 65 },
    { name: 'Speed', value: 45 },
];

const PokemonStats: React.FC = () => {
    return (
        <div>
            <h2>Stats</h2>
            <ul>
                {sampleStats.map((stat) => (
                    <li key={stat.name}>
                        {stat.name}: {stat.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonStats;
