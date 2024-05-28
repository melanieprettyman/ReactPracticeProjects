import React, {useState} from 'react';
import {Typography, Card, CardMedia, CardContent, Grid} from '@mui/material';
import img from './test.png';
import Tag from "./Tag";
import FavoriteToggle from "./FavoriteToggle";
import CompareToggle from "../comparePage/CompareToggle";
import {useLocation} from "react-router-dom";

type Props = {
  toggleType: 'favorite' | 'compare';
  onToggleSelection?: (isSelected: boolean) => void;
  selectionCount?: number;
};
const PokemonItem: React.FC<Props> = ({toggleType, onToggleSelection, selectionCount}) => {

  const location = useLocation();
 const isFavoritesPage = location.pathname === '/favorites';

 const [isSelected, setSelected] = useState(false);
 const [isFavorite, setFavorite] = useState(isFavoritesPage);


    const toggleSelection = () => {
        // @ts-ignore
      if (isSelected || (onToggleSelection && selectionCount < 5)) {
            setSelected(!isSelected);  // Direct toggle
            // @ts-ignore
        onToggleSelection(!isSelected);  // Assuming this is intended to manage an external state or counter
        }
    };

    const toggleFavorite = ()=>{
        setFavorite(prevState => !prevState);
    };


  return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <div style={{position: 'relative'}}>
            <CardMedia
                component="img"
                height="auto"
                image={img}
                alt="Pikachu"
            />
            {toggleType === 'favorite' ? (
                <FavoriteToggle isSelected={isFavorite} toggleSelection={toggleFavorite}/>
            ):(
                <CompareToggle isSelected={isSelected} toggleSelection={toggleSelection} />
            )}
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pikachu
            </Typography>
            <Tag label="Electric" type="Electric"/>
          </CardContent>
        </Card>
      </Grid>
  );
};

export default PokemonItem;
