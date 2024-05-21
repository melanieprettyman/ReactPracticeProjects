import React from 'react';
import {Typography, Card, CardMedia, CardContent, Grid} from '@mui/material';
import img from './test.png';
import Tag from "./Tag";

const PokemonItem: React.FC = () => {
  return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component="img"
              height="auto"
              image={img}
              alt="Pikachu"
            />
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
