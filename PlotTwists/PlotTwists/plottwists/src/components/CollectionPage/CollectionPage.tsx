import React from "react";
import Navbar from "../Navbar/Navbar";
import {Container, Stack, Typography} from "@mui/material";
import SynopsisContainer from "./Synopsis/SynopsisContainer";
import {useParams} from "react-router-dom";

const CollectionPage: React.FC = () => {
    const { genre } = useParams();
    return(
        <>
            <Navbar/>
            <Container sx={{mt:4, width: '70%', height: '100%'}}>
                <Stack spacing={3} alignItems='center' sx={{paddingBottom:2}}>
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