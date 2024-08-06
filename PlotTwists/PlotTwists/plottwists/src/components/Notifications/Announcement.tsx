import React from "react";
import {Avatar, Box, Paper, Stack, Typography} from "@mui/material";
import img from "../playStory/placeholder.png";
import CampaignIcon from '@mui/icons-material/Campaign';
import {useNavigate} from "react-router-dom";

type AnnouncementProps = {
    announcement: boolean,
};

const announcementString = "Happy Invasion Day! Which also doubles as release day! After twelve years of being on Wattpad, ten years of writing, and seven years of Pet, Pet: Genesis is officially published.\n" +
    "\n" +
    "You can find it on Amazon in ebook, paperback, and hardcover! The link is in the About tab on my profile, or you can just search the title on Amazon. I've also placed the direct link below this paragraph, but I don't think Wattpad activates hyperlinks withi"

const Announcement: React.FC<AnnouncementProps> = ({announcement}) => {
    const navigate = useNavigate();  // Initialize navigate function
     const handleNavigationToStory = () => {
        navigate('/story');
    };
     const doNothing = ()=>{};

    return (
        <Paper sx={{width: '100%', padding: 2}} onClick={!announcement ? handleNavigationToStory : doNothing }>
            <Stack direction={'row'} spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src={img}
                    sx={{width: 60, height: 60}}
                />

                {!announcement && (
                    <Stack direction={'row'} spacing={48}>
                        <Stack spacing={1}>
                            <Stack direction={'row'} spacing={1}>
                                <Typography sx={{fontWeight: 'bold'}}>@User</Typography>
                                <Typography>updated</Typography>
                                <Typography sx={{fontWeight: 'bold'}}>Story Title - Part #</Typography>
                            </Stack>
                            <Typography sx={{color: '#686868'}}>Tue, Jul 23, 2024 9:43 am</Typography>
                        </Stack>
                        <Box sx={{flexGrow: 1}}/>
                            <img src={img} alt='scene picture'
                                 style={{
                                     height: 'auto',
                                     aspectRatio: '11 / 16',
                                     maxWidth: 40,
                                 }}/>
                    </Stack>
                )}
                {announcement && (
                    <Stack spacing={1}>
                        <Stack direction={'row'} spacing={1}>
                            <Typography sx={{fontWeight: 'bold'}}>@User</Typography>
                            <Typography>posted a new announcement</Typography>
                        </Stack>
                        <Stack direction={'row'} spacing={1} sx={{color: '#686868'}}>
                            <CampaignIcon/>
                            <Typography>Tue, Jul 23, 2024 9:43 am</Typography>
                        </Stack>
                        <Typography sx={{color: '#686868'}}>{announcementString}</Typography>
                    </Stack>
                )}


            </Stack>
        </Paper>
    )
        ;
};
export default Announcement;