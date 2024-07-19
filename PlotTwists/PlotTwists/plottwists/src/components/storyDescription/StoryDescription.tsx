import React from "react";
import Navbar from "../navbar/Navbar";
import {Avatar, Button, ButtonGroup, Chip, Container, Divider, Rating, Stack, Tooltip, Typography} from "@mui/material";
import img from "../playStory/placeholder.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from "react-router-dom";

const StoryDetails: React.FC = () => {
    const navigate = useNavigate();  // Initialize navigate function

    // Function to handle back navigation
    const handleNavigationToStory = () => {
        navigate('/story');
    };
    return (
        <>
            <Navbar/>
            <Container sx={{mt: 3, width: '50%', height: '100%'}}>
                <Stack spacing={3}>
                    <Stack direction='row' spacing={3}>
                        <img src={img} alt='scene picture'
                             style={{
                                 height: 'auto',
                                 aspectRatio: '11 / 16',
                                 maxWidth: 200,
                                 minWidth: 200
                             }}/>
                        <Stack spacing={4}>
                            <Typography
                                sx={{
                                    fontWeight: 600,
                                    color: 'black',
                                    fontSize: 32,
                                    paddingBottom: 8
                                }}>
                                Delta: A Spy Novel
                            </Typography>

                            <Stack direction="row" alignItems='center' spacing={2} sx={{paddingBottom: 1}}>
                                <Stack alignItems="center" spacing={1}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <VisibilityIcon sx={{color: "#5c5959", fontSize: 20}}/>
                                        <Typography variant="body2"
                                                    sx={{color: "#5c5959", fontSize: 18}}>Reads</Typography>
                                    </Stack>
                                    <Typography variant="body2" sx={{color: "#5c5959", fontSize: 18}}>1.8M</Typography>
                                </Stack>

                                <Divider orientation="vertical" variant="middle" flexItem/>

                                <Stack alignItems="center" spacing={1}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Rating name="read-only" value={3.7} readOnly size="medium" precision={0.5}/>
                                        <Typography variant="body2"
                                                    sx={{color: "#5c5959", fontSize: 18}}>Rating</Typography>
                                    </Stack>
                                    <Typography variant="body2" sx={{color: "#5c5959", fontSize: 18}}>3.7</Typography>
                                </Stack>

                                <Divider orientation="vertical" variant="middle" flexItem/>

                                <Stack alignItems="center" spacing={1}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <FormatListBulletedIcon sx={{color: "#5c5959", fontSize: 20}}/>
                                        <Typography variant="body2"
                                                    sx={{color: "#5c5959", fontSize: 18}}>Parts</Typography>
                                    </Stack>
                                    <Typography variant="body2" sx={{color: "#5c5959", fontSize: 18}}>36</Typography>
                                </Stack>
                            </Stack>

                            <ButtonGroup variant="contained" fullWidth disableElevation
                                         sx={{height: 50, borderColor: 'white'}}>
                                <Button
                                    sx={{flexGrow: 1, fontWeight: 600, borderRadius: 6}}
                                    onClick={handleNavigationToStory}
                                >
                                    Start Reading
                                </Button>
                                <Tooltip title="Add to your library">
                                    <Button sx={{width: 'auto', fontWeight: 600, borderRadius: 6}}><AddIcon/></Button>
                                </Tooltip>
                            </ButtonGroup>

                        </Stack>
                    </Stack>

                     <Stack direction='row' alignItems='center' >
                            <Button>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={img}
                                    sx={{width: 24, height: 24}}
                                />
                                <Typography variant='h6' sx={{color: 'black', paddingLeft: 1}}>Author</Typography>
                            </Button>
                        </Stack>

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

                    <Typography sx={{color: 'black', fontSize: 20, paddingBottom: 1}}>
                        After ten years, Finn Martins returns to Brazil to destroy his enemy, though he didn't count on
                        facing the only woman he's ever loved - his enemy's daughter, Nina Peres.

                        *****

                        After ten years, Finn Martins is returning to Rio de Janeiro, Brazil as a different man. He's
                        changed his name, his identity, and even his looks. Now Markos Petrakis, a Greek Ruthless
                        Multi-Billionaire World shipping magnate, he's ruthless and feared. He can destroy anyone with
                        just a snap of his fingers, and that's his plan: to destroy his sworn enemy. The man who ruined
                        his life and tore apart his family. The only problem? Getting his revenge would also hurt the
                        only woman he's ever loved - his enemy's daughter, Nina Peres.

                        [[word count: 70,000-80,000 words]]
                        Cover designed by Ashley Santoro
                        All Rights Reserved
                    </Typography>
                </Stack>
            </Container>
        </>
    );
};

export default StoryDetails;