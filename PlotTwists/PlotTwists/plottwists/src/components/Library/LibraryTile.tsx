import React from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    IconButton, Rating,
    Stack,
    Typography
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import img from "../PlayStory/placeholder.png";
import DeleteIcon from "@mui/icons-material/Delete";
import {useNavigate} from "react-router-dom";


function LibraryTile() {
    let navigate = useNavigate();

    const handleNavigationToDescription = () => {
        navigate("/details");
    };
    const handleNavigationToStory = () => {
        navigate('/story');
    };

    return (
        <Grid item xs={12} sm={6} md={2.4}>
            <Box sx={{position: 'relative', width: '100%', '&:hover': {'& .overlay': {display: 'flex'}}}}>
                <Card sx={{width: '100%', boxShadow: 0.5, transition: 'filter 0.3s', '&:hover': {filter: 'blur(4px)'}}}>
                    <CardMedia
                        component="img"
                        sx={{height: 'auto', aspectRatio: '11 / 16'}}
                        image={img}
                        alt="Live From Space"
                    />
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: 1
                    }}>
                        <Typography component="div" sx={{fontSize: 20}}>
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            @Mac Miller
                        </Typography>
                        <Stack direction="row" alignItems='center' spacing={1}>
                            <Stack direction="row" alignItems='center' spacing={1}>
                                <VisibilityIcon sx={{color: "#5c5959", fontSize: 16}}/>
                                <Typography variant="body2" sx={{color: "#5c5959", fontSize: 14}}>1.8M</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Rating name="read-only" value={3.7} readOnly size="small" precision={0.5}/>
                                <Typography variant="body2" sx={{color: "#5c5959", fontSize: 14}}>3.7</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
                <Stack
                    className="overlay"
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'none',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)' // Semi-transparent overlay
                    }}
                >
                    <IconButton sx={{
                        color: 'white', alignSelf: 'flex-end', position: 'absolute',
                        top: 0,
                        right: 0,
                    }}><DeleteIcon/></IconButton>
                    <Button variant='contained' sx={{color: 'white', fontSize: 14, fontWeight: 'bold'}}
                            onClick={handleNavigationToStory}>Read</Button>
                    <Button variant='contained' sx={{color: 'white', fontSize: 14, fontWeight: 'bold'}}
                            onClick={handleNavigationToDescription}>Details</Button>
                </Stack>
            </Box>
        </Grid>
    );
}

export default LibraryTile;