import React from "react";
import Navbar from "../navbar/Navbar";
import {Avatar, AvatarGroup, Box, Button, Container, Grid, Paper, Stack, Tab, Tabs, Typography} from "@mui/material";
import img from "../playStory/placeholder.png";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SynopsisCard from "../collectionPage/SynopsisCard";
import ProfileCard from "./ProfileCard";
import CommentSection from "../playStory/CommentSection";
import Updates from "./Updates";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box>{children}</Box>}
        </div>
    );
}

const Profile: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }


    return (
        <>
            <Navbar/>
            <Container sx={{mt: 4, width: '70%', height: '100%'}}>
                <Paper sx={{width: '100%', height: '100%', mb: 4, minHeight: 1000}}>
                    <Stack>
                        <Stack direction='row' spacing={5} sx={{padding: 10}}>
                            <Stack spacing={5}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={img}
                                    sx={{width: 200, height: 200}}
                                />
                                <Button variant={"contained"}>
                                    <PersonAddIcon sx={{paddingRight: 2}}/>
                                    Follow
                                </Button>
                            </Stack>
                            <Stack spacing={1} sx={{paddingTop: 2}}>
                                <Typography variant={'h4'} sx={{fontWeight: 'bold'}}>Name</Typography>
                                <Typography variant={'h5'}
                                            sx={{fontWeight: 'bold', paddingBottom: 4}}>@username</Typography>

                                <Stack direction='row' spacing={3} alignItems={'center'}>
                                    <Stack alignItems={'center'}>
                                        <Typography sx={{fontWeight: 'bold'}}>1</Typography>
                                        <Typography sx={{fontWeight: 'bold'}}>WORKS</Typography>
                                    </Stack>
                                    <Stack alignItems={'center'}>
                                        <Typography sx={{fontWeight: 'bold'}}>1</Typography>
                                        <Typography sx={{fontWeight: 'bold'}}>FOLLOWERS</Typography>
                                    </Stack>
                                </Stack>
                                <Box sx={{borderBottom: 1, borderColor: 'divider', paddingTop: 4}}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="ABOUT" {...a11yProps(0)} sx={{fontSize: 20, fontWeight: 'bold'}}/>
                                        <Tab label="FOLLOWING" {...a11yProps(1)}
                                             sx={{fontSize: 20, fontWeight: 'bold'}}/>
                                        <Tab label="UPDATES" {...a11yProps(2)}
                                             sx={{fontSize: 20, fontWeight: 'bold'}}/>
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                    <Typography sx={{fontSize: 18, paddingBottom: 3}}>
                                        I'm mostly on instagram--where I'm always ready to talk fictional crushes and
                                        nerd
                                        out over books. (Okay, okay. And I've also been known to share snippets and
                                        teasers
                                        from my upcoming novels, if you're into that sort of thing...) Please feel free
                                        to
                                        chat with me there @KerriManiscalco. I love talking with fellow readers!


                                        Kerri Maniscalco grew up in a semi-haunted house outside NYC where her
                                        fascination
                                        with gothic settings began. In her spare time she reads everything she can get
                                        her
                                        hands on, cooks all kinds of food with her family and friends, and drinks
                                        entirely
                                        too much tea while discussing life’s finer points with her cats.

                                        She is the #1 NYT and USA Today bestselling author of the STALKING JACK THE
                                        RIPPER
                                        quartet, the KINGDOM OF THE WICKED trilogy, and her forthcoming adult debut,
                                        THRONE
                                        OF THE FALLEN, set within the KINGDOM OF THE WICKED universe. Two other un-named
                                        titles will also be set within the KOTW world and will follow two different
                                        princes.
                                    </Typography>

                                    <Paper sx={{padding: 2}}>
                                        <Stack spacing={4} sx={{mb: 2, fontWeight: 'bold'}}>
                                            <Typography variant={'h5'}>Stories by Username</Typography>
                                            <SynopsisCard/>
                                            <SynopsisCard/>
                                            <SynopsisCard/>
                                            <SynopsisCard/>
                                            <SynopsisCard/>
                                        </Stack>
                                    </Paper>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    <Paper sx={{padding: 2, width: 720, maxWidth: 'none'}}>
                                        <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                            <ProfileCard/>
                                            <ProfileCard/>
                                            <ProfileCard/>
                                            <ProfileCard/>
                                            <ProfileCard/>
                                        </Grid>
                                    </Paper>
                                </CustomTabPanel>

                                 <CustomTabPanel value={value} index={2}>
                                     <Container sx={{padding: 2, width: 720, maxWidth: 'none'}}>
                                        <Updates/>
                                    </Container>
                                 </CustomTabPanel>

                            </Stack>
                        </Stack>
                    </Stack>
                </Paper>
            </Container>
        </>
    );
};

export default Profile;