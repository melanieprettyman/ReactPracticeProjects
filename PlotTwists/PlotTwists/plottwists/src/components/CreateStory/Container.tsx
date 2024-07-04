import React from 'react';
import {AppBar, IconButton, Toolbar, Box, Container, Stack, Typography, Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import StoryDetails from './StoryDetails';
import FileUpload from "./FileUpload";

const CreateStoryPage: React.FC = () => {
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
                    <IconButton>
                        <ArrowBackIcon sx={{fontSize: 60, paddingTop: 1}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{mt: 2}}>
                <Typography variant="h4" gutterBottom sx={{textAlign: 'center'}}>
                    Story Details
                </Typography>
                <Stack direction="row" spacing={2} sx={{width: '100%'}}>
                    <FileUpload/>
                    <StoryDetails/>
                </Stack>
                <Button type="submit" fullWidth variant="contained" sx={{mt: 3, mb: 2, width:'10vw', mx: 'auto', display: 'block'}}>
                    Create Series
                </Button>
            </Container>
        </Box>
    );
};

export default CreateStoryPage;
