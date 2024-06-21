import React from 'react';
/**
 * `PokemonStats` is a component that displays a list of Pokémon statistics.
 * It receives an array of stat values and maps them to their respective names, then renders this data in a list format.
 *
 * Props:
 * - `stats`: An array of numbers representing the Pokémon's statistics in the order of HP, Attack, Defense,
 *   Special Attack, Special Defense, and Speed.
 *
 * Example usage:
 * <PokemonStats stats={[45, 49, 49, 65, 65, 45]} />
 */
type Stat = {
    name: string;
    value: number;
};

type PokemonStatsProps = {
    stats: number[];
}

const PokemonStats: React.FC<PokemonStatsProps> = ({stats}) => {
    const pokemonStats: Stat[] = [
        {name: 'HP', value: stats[0]},
        {name: 'Attack', value: stats[1]},
        {name: 'Defense', value: stats[2]},
        {name: 'SpecialAttack', value: stats[3]},
        {name: 'SpecialDefense', value: stats[4]},
        {name: 'Speed', value: stats[5]},
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
