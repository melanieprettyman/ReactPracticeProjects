import React from "react";
import {AppBar, Box, Button, Container, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from '@mui/icons-material/Delete';

const NewPartPage: React.FC = () => {
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

                    <Typography variant='h4' sx={{color:'black'}}>
                        Part 1: Title
                    </Typography>

                    <Box sx={{flexGrow: 1}}/>

                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <Stack direction="row" spacing={1}>
                        <Button variant="contained">Publish</Button>
                        <Button variant="contained">Draft</Button>
                        <Button variant="contained">Preview</Button>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{mt: 2}}>
            </Container>
        </Box>
    );
};

export default NewPartPage;