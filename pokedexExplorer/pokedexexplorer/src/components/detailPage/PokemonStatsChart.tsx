import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from 'recharts';
import {Typography} from "@mui/material";
import {useLocation} from "react-router-dom";

type Stat = {
    name: string;
    value: number;
};

type PokemonStatsProps = {
    stats: number[];
};

const PokemonStats: React.FC<PokemonStatsProps> = ({stats}) => {
    const location = useLocation();
    const isComparePage = location.pathname === '/compare';

    const width = isComparePage ? 400 : 500;

    const pokemonStats: Stat[] = [
        {name: 'HP', value: stats[0]},
        {name: 'Attack', value: stats[1]},
        {name: 'Defense', value: stats[2]},
        {name: 'Special Attack', value: stats[3]},
        {name: 'Special Defense', value: stats[4]},
        {name: 'Speed', value: stats[5]},
    ];

    const colors: Record<string, string> = {
        HP: 'red',
        Attack: 'orange',
        Defense: 'yellow',
        'Special Attack': 'green',
        'Special Defense': 'blue',
        Speed: 'purple',
    };

    return (
        <>
            <div style={{ textAlign: 'center', marginBottom: '5px' }}>
                <Typography component="div" sx={{color: '#919191', fontSize: 10}}>
                Hover over a bar to see the stat value
             </Typography>
            </div>
        <ResponsiveContainer width={width} height={300}>
            <BarChart
                layout="vertical"
                data={pokemonStats}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis type="number" domain={[0, 252]}/>
                <YAxis type="category" dataKey="name" />
                <Tooltip/>
                <Bar
                    dataKey="value"
                    background={{fill: '#eee'}}
                >
                    {pokemonStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[entry.name]}/>

                    ))}

                </Bar>
            </BarChart>
        </ResponsiveContainer>
            </>
    );
};

export default PokemonStats;
