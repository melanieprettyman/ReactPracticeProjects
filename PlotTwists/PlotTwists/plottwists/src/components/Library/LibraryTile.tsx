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
import styles from "./styles";


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
            <Box sx={styles.tileBox}>
                <Card sx={styles.cardContainer}>
                    <CardMedia
                        component="img"
                        sx={styles.cardMedia}
                        image={img}
                        alt="Live From Space"
                    />
                    <CardContent sx={styles.cardContent}>
                        <Typography component="div" sx={{fontSize: 20}}>
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            @Mac Miller
                        </Typography>
                        <Stack direction="row" alignItems='center' spacing={1}>
                            <Stack direction="row" alignItems='center' spacing={1}>
                                <VisibilityIcon sx={styles.icon}/>
                                <Typography variant="body2" sx={styles.header}>1.8M</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Rating name="read-only" value={3.7} readOnly size="small" precision={0.5}/>
                                <Typography variant="body2" sx={styles.header}>3.7</Typography>
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
                    sx={styles.overlay}
                >
                    <IconButton sx={styles.deleteBtn}><DeleteIcon/></IconButton>
                    <Button variant='contained' sx={styles.tileBtn}
                            onClick={handleNavigationToStory}>Read</Button>
                    <Button variant='contained' sx={styles.tileBtn}
                            onClick={handleNavigationToDescription}>Details</Button>
                </Stack>
            </Box>
        </Grid>
    );
}

export default LibraryTile;