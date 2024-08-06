import React from 'react';
import {AppBar, IconButton, Toolbar, Box, Container, Stack, Typography, Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StoryDetails from './StoryDetails';
import FileUpload from "./FileUpload";
import {useNavigate} from "react-router-dom";

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
            <AppBar position="static" sx={{
                backgroundColor: "white",
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                height: 100
            }}>
                <Toolbar sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <IconButton onClick={handleBack}>
                        <ArrowBackIcon sx={{fontSize: 60, paddingTop: 1}}/>
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
                    sx={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <FileUpload/>
                    <StoryDetails/>
                </Stack>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2, width:'10vw', mx: 'auto', display: 'block'}}
                    onClick={handleCreateSeries}
                >
                    Create Series
                </Button>
            </Container>
        </Box>
    );
};

export default CreateStoryPage;
