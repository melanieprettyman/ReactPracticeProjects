import {Box, Typography} from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import img from './test.png';
import PokemonStatsChart from "../detailPage/PokemonStatsChart";
import Tag from "../homePage/Tag";
import styles from "./styles/styles";

const ComparisonItem:React.FC = () => {
    return(
      <Box
            sx={styles.comparisonItem}
        >
            <img src={img} style={{ width: '100%', height: 'auto' }} />
            <Typography variant="h6" sx={{ textAlign: 'center' }}>Pikachu</Typography>
            <Divider sx={{ width: '100%', my: 2 }} />

            <Typography variant="body1" sx={{ textAlign: 'center' }}><b>Stats</b></Typography>
            <PokemonStatsChart />
            <Divider sx={{ width: '100%', my: 2 }} />

            <Typography variant="body1" sx={{ textAlign: 'center' }}><b>Type</b></Typography>
            <Tag label="Electric" type="Electric" />
            <Divider sx={{ width: '100%', my: 2 }} />

            <Typography variant="body1" sx={{ textAlign: 'center' }}><b>Weaknesses</b></Typography>
            <Tag label="Ground" type="Ground" />
        </Box>
    );
}

export default ComparisonItem;