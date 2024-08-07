import React from "react";
import {Box, ButtonBase, Chip, Grid, Paper, Rating, Stack, Typography} from "@mui/material";
import img from "../../PlayStory/placeholder.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {useNavigate} from "react-router-dom";


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
            <ButtonBase onClick={handleNavigationToDescription}
                        sx={{width: '100%', display: 'block', textAlign: 'initial'}}>
                <Box
                    sx={{
                        minWidth: 500,
                        minHeight: 225,
                        maxWidth: 500,
                        maxHeight: 225,
                        paddingBottom:2
                    }}
                >
                    <Stack direction='row' spacing={1}>
                        <img src={img} alt='scene picture'
                             style={{
                                 height: 'auto',
                                 aspectRatio: '11 / 16',
                                 maxWidth: 180,
                             }}/>
                        <Stack>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    color: 'black',
                                    fontSize: 20,
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                }}>
                                Delta: A Spy Novel
                            </Typography>
                            <ButtonBase onClick={(event) => handleNavigationToProfile(event)}
                                        sx={{textAlign: 'left', justifyContent: 'flex-start', width: '100%'}}>
                                <Typography
                                    sx={{
                                        color: 'black',
                                        fontSize: 15,
                                        '&:hover': {
                                            textDecoration: 'underline'
                                        }
                                    }}

                                >
                                    by Monica
                                </Typography>
                            </ButtonBase>

                            <Stack direction="row" alignItems='center' spacing={2}
                                   sx={{paddingBottom: 1}}>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <VisibilityIcon sx={{color: "#5c5959", fontSize: 16}}/>
                                    <Typography variant="body2" sx={{color: "#5c5959", fontSize: 14}}>1.8M</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <Rating name="read-only" value={3.7} readOnly size="small" precision={0.5}/>
                                    <Typography variant="body2" sx={{color: "#5c5959", fontSize: 14}}>3.7</Typography>
                                </Stack>
                                <Stack direction="row" alignItems="center" spacing={1}>
                                    <FormatListBulletedIcon sx={{color: "#5c5959", fontSize: 16}}/>
                                    <Typography variant="body2" sx={{color: "#5c5959", fontSize: 14}}>36</Typography>
                                </Stack>
                            </Stack>

                            <Typography sx={{color: 'black', fontSize: 15, paddingBottom: 1}}>
                                Book 1:The Last Dragon(chp 1-125)
                                Book 2:The Return(chp 126-170)
                                Book 3:Friend or Enemy(chp171-200)
                                ***Inspired by Game Of Thrones***
                                For generations, the people of the western
                                world had lived under one, corrupt, ruthless,
                                blah, blah, blah, blah, blah, blah, blah, blah, blah...
                            </Typography>

                            <Stack direction="row" alignItems='center' spacing={1}>
                                <Chip label="Completed"
                                      sx={{
                                          background: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
                                          width: 100,
                                          height: 20,
                                          fontWeight: 'bold',
                                      }}/>
                                <Chip label="Mature"
                                      sx={{
                                          background: '#FF3F12',
                                          width: 100,
                                          height: 20,
                                          fontWeight: 'bold',
                                          color: 'white'
                                      }}/>
                            </Stack>

                        </Stack>
                    </Stack>

                </Box>
            </ButtonBase>
        </Grid>
    );
}
export default SynopsisCard;

//background:linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);