import React from 'react';
import NavBar from "../homePage/NavBar";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import styles from './styles/styles';
import img from './test.png';
import PokemonStatsChart from "./PokemonStatsChart";
import Tag from "../homePage/Tag";
import PokemonDescription from "./PokemonDescription";

// Define the interface outside of the component
interface PokemonDescriptionProps {
  height: string;
  weight: string;
  category: string;
  abilities: string;
}

const DetailPage: React.FC = () => {
  const description: PokemonDescriptionProps = {
    height: "1'00\"",
    weight: "4.4 lbs",
    category: "Tiny Mouse",
    abilities: "Static"
  };

  return (
    <div className='detailPage'>
      <NavBar />
      <Box sx={styles.container}>
        <Paper sx={styles.paper}>
          <Grid container alignItems="center" justifyContent="center" sx={{ height: '30%' }}>
            <Typography variant="h3">
              Pichu
            </Typography>
          </Grid>

          <Grid container direction='row' sx={{ paddingTop: "50px" }}>
            <Grid sx={styles.leftSideColumn}>
              <Stack spacing={2}>
                <img src={img} alt="Pichu" className='img'/>
                <PokemonStatsChart />
              </Stack>
            </Grid>

            <Grid sx={styles.rightSideColumn}>
              <Grid direction='row'>
                <Typography sx={{ paddingBottom: '50px' }}>
                  It is unskilled at storing electric power. Any kind of shock causes it to discharge energy spontaneously.
                </Typography>
                  <PokemonDescription
                  height={description.height}
                  weight={description.weight}
                  category={description.category}
                  abilities={description.abilities}
                />
                <Typography variant='h5' sx={{ paddingBottom: '10px' }}>
                  Type
                </Typography>
                <Tag label="Electric" type="Electric" />
                <Typography variant='h5' sx={{ paddingTop: '20px', paddingBottom: '10px' }}>
                  Weaknesses
                </Typography>
                <Tag label="Ground" type="Ground" />
              </Grid>
            </Grid>

          </Grid>
        </Paper>
      </Box>
    </div>
  );
};

export default DetailPage;
