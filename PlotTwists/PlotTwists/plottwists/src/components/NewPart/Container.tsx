import React, {useEffect, useState} from "react";
import {AppBar, Box, Button, Container, IconButton, Stack, TextField, Toolbar, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from '@mui/icons-material/Delete';
import Scene from "./Scene/Container";
import DecisionTreeFlow from "./Scene/DecisionTree";


const NewPartPage: React.FC = () => {
    const [title, setTitle] = useState('');
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const [decisionNumber, setDecisionNumber] = useState(0);

    const handleDecisionNumber = (num: number) => {
    setDecisionNumber(num);
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
                    <IconButton>
                        <ArrowBackIcon sx={{fontSize: 60, paddingTop: 1}}/>
                    </IconButton>

                    <Typography variant='h4' sx={{color: 'black'}}>
                        Part 1: {title || "Title"} {/* Display the current title or default to "Title" */}
                    </Typography>

                    <Box sx={{flexGrow: 1}}/>

                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <Stack direction="row" spacing={1}>
                            <Button variant="contained">Publish</Button>
                            <Button variant="contained">Draft</Button>
                            <Button variant="contained">Preview</Button>
                            <IconButton>
                                <DeleteIcon/>
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{ mt: 2, mb: 2, overflow: 'visible', height: 'auto' }}>
                <Stack spacing={3}>
                    <TextField
                        id="standard-basic"
                        variant="standard"
                        value={title}
                        onChange={handleTitleChange}
                        sx={{
                            width: 700,
                            "& .MuiInput-input": {
                                fontSize: 36,
                            }
                        }}
                        placeholder="Enter Part 1 Title"/>
                         <Scene/>
                </Stack>
            </Container>

        </Box>
    );
};

export default NewPartPage;
