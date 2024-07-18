import React from "react";
import {AppBar, Box, Container, IconButton, Paper, Rating, Stack, Toolbar, Typography} from "@mui/material";
import Page from "./Page";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import Divider from "@mui/material/Divider";
import PageContent from "./PageContent";

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
                <Paper elevation={3} sx={{paddingBottom: 10}}>
                    <div style={{paddingBottom: 30}}>
                        <Typography textAlign='center' variant='h4' sx={{paddingTop: 5, paddingBottom: 1}}>
                            1. Chapter Title
                        </Typography>
                        <Divider variant="middle"/>
                    </div>
                    <PageContent/>
                </Paper>
            </Container>
        </Box>
    );
};

export default Preview;