import React from 'react';
import Chip from '@mui/material/Chip';

type TagProps = {
  label: string;
  type: string;
}

const Tag: React.FC<TagProps> = ({ label, type }) => {
  const getTypeColor = (type: string): React.CSSProperties => {
    const typeColors: { [key: string]: React.CSSProperties } = {
      fire: { background: 'linear-gradient(to right, #f12711, #f5af19)' },
      water: { backgroundColor: '#6890F0' },
      grass: { backgroundColor: '#78C850' },
      electric: { backgroundColor: '#F8D030' },
      psychic: { backgroundColor: '#F85888' },
      ice: { backgroundColor: '#98D8D8' },
      dragon: { backgroundColor: '#7038F8' },
      dark: { backgroundColor: '#836958' },
      fairy: { backgroundColor: '#EE99AC' },
      normal: { backgroundColor: '#A0A0A0' },
      poison: { backgroundColor: '#ab93ef' },
      flying: {background: 'linear-gradient(to top, #808080 50%, #6dd5fa 50%)'},
      bug:{background: 'linear-gradient(to right, #11998e, #38ef7d)'},
      ground: {background: 'linear-gradient(to top, #A88905 50%, #F8D030 50%)'},
      rock: {background: 'linear-gradient(to right, #C19A6B, #967969)'},
      ghost:{background: 'linear-gradient(to right, #757f9a, #d7dde8)'},
      steel:{background: 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)'},
      fighting:{backgroundColor: '#E97451'},
    };
    return typeColors[type] || { backgroundColor: '#A0A0A0' };
  };

  return (
    <Chip
      label={label}
      size="small"
      sx={{
        ...getTypeColor(type),
        color: '#070707',
        fontSize: '0.875rem',
        height: 24,
        maxWidth: 100,
        borderRadius: '4px',
        marginRight:'3px'
      }}
    />
  );
}

export default Tag;
