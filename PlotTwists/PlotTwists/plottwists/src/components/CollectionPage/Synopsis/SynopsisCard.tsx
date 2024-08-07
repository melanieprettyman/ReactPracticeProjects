import React from "react";
import {Box, ButtonBase, Chip, Grid, Paper, Rating, Stack, Typography} from "@mui/material";
import img from "../../PlayStory/placeholder.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {useNavigate} from "react-router-dom";
import styles from "../styles";


const SynopsisCard: React.FC = () => {
    let navigate = useNavigate();

    const handleNavigationToDescription = () => {
        navigate("/details");
    };

    const handleNavigationToProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();  // Prevent the event from propagating to the parent button
        navigate("/user");
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <ButtonBase onClick={handleNavigationToDescription} sx={styles.buttonBase}>
                <Box sx={styles.cardContainer}>
                    <Stack direction='row' spacing={1}>
                        <img src={img} alt='scene picture' style={styles.image}/>
                        <Stack>
                            <Typography sx={styles.title}>Delta: A Spy Novel
                            </Typography>
                            <ButtonBase
                                onClick={(event) => handleNavigationToProfile(event)}
                                sx={styles.authorBtn}>
                                <Typography sx={styles.author}>by Monica</Typography>
                            </ButtonBase>

                            <Stack direction="row" alignItems='center' spacing={2} sx={{paddingBottom: 1}}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <VisibilityIcon sx={styles.icon}/>
                                    <Typography variant="body2" sx={styles.subtitle}>1.8M</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Rating name="read-only" value={3.7} readOnly size="small" precision={0.5}/>
                                    <Typography variant="body2" sx={styles.subtitle}>3.7</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <FormatListBulletedIcon sx={styles.icon}/>
                                    <Typography variant="body2" sx={styles.subtitle}>36</Typography>
                                </Stack>
                            </Stack>

                            <Typography sx={styles.synopsis}>
                                Book 1:The Last Dragon(chp 1-125)
                                Book 2:The Return(chp 126-170)
                                Book 3:Friend or Enemy(chp171-200)
                                ***Inspired by Game Of Thrones***
                                For generations, the people of the western
                                world had lived under one, corrupt, ruthless,
                                blah, blah, blah, blah, blah, blah, blah, blah, blah...
                            </Typography>

                            <Stack direction="row" alignItems='center' spacing={1}>
                                <Chip label="Completed" sx={styles.completeTag}/>
                                <Chip label="Mature" sx={styles.matureTag}/>
                            </Stack>

                        </Stack>
                    </Stack>

                </Box>
            </ButtonBase>
        </Grid>
    );
}
export default SynopsisCard;

