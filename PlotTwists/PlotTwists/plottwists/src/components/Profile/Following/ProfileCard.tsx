import React from "react";
import {Box, ButtonBase, Card, CardContent, CardMedia, Grid, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import img from "../../PlayStory/placeholder.png";

const ProfileCard: React.FC = () => {
    let navigate = useNavigate();

    const handleNavigationToProfile = () => {
        navigate("/user");
    };

    return (
        <Grid item xs={12} sm={6}>
            <ButtonBase onClick={handleNavigationToProfile}
                        sx={{width: '100%', display: 'block', textAlign: 'initial'}}>
                <Card sx={{ width: '100%', boxShadow: 3}}>
                    <CardMedia
                        component="img"
                        sx={{ width: '100%', height: 'auto' }}
                        image={img}
                    />
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: 1
                    }}>
                        <Typography component="div" variant="h5">
                            Live From Space
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            @Mac Miller
                        </Typography>
                        <Stack direction='row' spacing={3} alignItems={'center'} sx={{paddingTop:2}}>
                            <Stack alignItems={'center'}>
                                <Typography variant="caption" color="text.secondary">1</Typography>
                                <Typography variant="caption" color="text.secondary" >WORKS</Typography>
                            </Stack>
                            <Stack alignItems={'center'}>
                                <Typography variant="caption" color="text.secondary" >1</Typography>
                                <Typography variant="caption" color="text.secondary">FOLLOWERS</Typography>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </ButtonBase>
        </Grid>
    );
};

export default ProfileCard;
