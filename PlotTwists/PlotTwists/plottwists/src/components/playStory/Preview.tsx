import React from "react";
import {AppBar, Box, Container, IconButton, Toolbar} from "@mui/material";
import Page from "./Page";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from "react-router-dom";

const Preview: React.FC = () => {
    const navigate = useNavigate();  // Initialize navigate function

    // Function to handle back navigation
    const handleBack = () => {
        navigate(-1);
    };
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{
                backgroundColor: "white",
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                height: 100
            }}>
                <Toolbar sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <IconButton onClick={handleBack}>
                        <ArrowBackIcon sx={{fontSize: 60, paddingTop: 1, paddingRight: 1}}/>
                    </IconButton>
                    <Box sx={{flexGrow: 1}}/>
                </Toolbar>
            </AppBar>
            <Container sx={{mt: .2, width: '70%', height: '100%'}}>
                <Page/>
            </Container>
        </Box>
    );
};

export default Preview;