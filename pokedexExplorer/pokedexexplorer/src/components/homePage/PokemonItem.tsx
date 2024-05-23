import React, {useState} from 'react';
import {Typography, Card, CardMedia, CardContent, Grid, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img from './test.png';
import Tag from "./Tag";

const PokemonItem: React.FC = () => {

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
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
            <IconButton
                onClick={toggleFavorite}
                style={{position: 'absolute', right: 0, top: 0, color: isFavorite ? 'red' : 'gray'}}
                aria-label="add to favorites"
            >
              {isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </IconButton>
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
