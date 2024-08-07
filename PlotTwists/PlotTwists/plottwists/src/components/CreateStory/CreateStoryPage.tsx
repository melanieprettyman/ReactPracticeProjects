import React from 'react';
import {AppBar, IconButton, Toolbar, Box, Container, Stack, Typography, Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StoryDetails from './FormContent/StoryDetails';
import FileUpload from "./FormContent/FileUpload";
import {useNavigate} from "react-router-dom";
import styles from './Styles'

const CreateStoryPage: React.FC = () => {
    const navigate = useNavigate();  // Initialize navigate function

    // Function to handle back navigation
    const handleBack = () => {
        navigate(-1);
    };
    const handleCreateSeries = () =>{
         navigate("/add-new-part" );
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={styles.appBar}>
                <Toolbar sx={styles.toolBar}>
                    <IconButton onClick={handleBack}>
                        <ArrowBackIcon sx={styles.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{mt: 2}}>
                <Typography variant="h4" gutterBottom sx={{textAlign: 'center'}}>
                    Story Details
                </Typography>
                <Stack
                    direction="row"
                    spacing={6}
                    sx={styles.container}>
                    <FileUpload/>
                    <StoryDetails/>
                </Stack>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={styles.submitBtn}
                    onClick={handleCreateSeries}
                >
                    Create Series
                </Button>
            </Container>
        </Box>
    );
};

export default CreateStoryPage;
