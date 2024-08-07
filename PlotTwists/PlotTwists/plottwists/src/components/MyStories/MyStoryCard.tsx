import {Box, Button, Paper, Rating, Stack, Typography} from "@mui/material";
import img from "../PlayStory/placeholder.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./styles";

const MyStoryCard: React.FC = () => {
    let navigate = useNavigate();

    const navigateToEditStoryDetails = () => {
        navigate("/myworks/editstorydetails");
    };

    return (
        <Paper sx={{padding: 2}}>
            <Stack direction={'row'} spacing={3}>
                <img src={img} alt='scene picture' style={styles.img}/>
                <Stack spacing={1}>
                    <Typography sx={styles.title}>Delta: A Spy Novel</Typography>
                    <Typography sx={styles.numParts}>1 - Published Part</Typography>

                    <Typography color="text.secondary">Updated Jul 08, 2024 11:50 AM</Typography>

                    <Stack direction="row" alignItems='center' spacing={2}
                           sx={{paddingBottom: 1}}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <VisibilityIcon sx={styles.icon}/>
                            <Typography variant="body2" sx={styles.subtitle}>1.8M</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Rating name="read-only" value={3.7} readOnly size="small" precision={0.5}/>
                            <Typography variant="body2" sx={styles.subtitle}>3.7</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <ModeCommentIcon sx={styles.icon}/>
                            <Typography variant="body2" sx={styles.subtitle}>36</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Box sx={{flexGrow: 1}}></Box>
                <Button
                    variant="contained"
                    sx={styles.continueWritingBtn}
                    onClick={navigateToEditStoryDetails}
                >
                    Continue Writing
                </Button>
            </Stack>
        </Paper>
    );
}

export default MyStoryCard;