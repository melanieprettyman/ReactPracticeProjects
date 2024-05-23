import React from 'react';
import Chip from '@mui/material/Chip';

interface TagProps {
  label: string;
  type: string;
}

const Tag: React.FC<TagProps> = ({ label, type }) => {
  const getTypeColor = (type: string): string => {
    const typeColors: { [key: string]: string } = {
      Fire: '#F08030',
      Water: '#6890F0',
      Grass: '#78C850',
      Electric: '#F8D030',
      Psychic: '#F85888',
      Ice: '#98D8D8',
      Dragon: '#7038F8',
      Dark: '#705848',
      Fairy: '#EE99AC',
      Normal: '#A8A878',
      // Add more types as needed
    };
    return typeColors[type] || '#A0A0A0';  // Default color if type is not found
  };

  return (
    <Chip
      label={label}
      size="small"
      sx={{
        backgroundColor: getTypeColor(type),
        color: '#070707',
        fontSize: '0.875rem',
        height: 24,
        maxWidth:100,
        borderRadius: '4px'
      }}
    />

  );
}

export default Tag;
