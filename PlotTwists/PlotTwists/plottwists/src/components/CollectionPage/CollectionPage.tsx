import React from "react";
import Navbar from "../Navbar/Navbar";
import {Container, Stack, Typography} from "@mui/material";
import SynopsisContainer from "./Synopsis/SynopsisContainer";
import {useParams} from "react-router-dom";
import styles from "./styles";
const CollectionPage: React.FC = () => {
    const { genre } = useParams();
    return(
        <>
            <Navbar/>
            <Container sx={styles.pageContainer}>
                <Stack spacing={3} alignItems='center' sx={styles.pageStack}>
                    <Typography variant='h4'>
                       {genre ? `${genre.charAt(0).toUpperCase() + genre.slice(1)} Stories` : 'Genre Stories'}
                    </Typography>
                    <SynopsisContainer/>
                </Stack>
            </Container>

        </>
    );
}
export default CollectionPage;