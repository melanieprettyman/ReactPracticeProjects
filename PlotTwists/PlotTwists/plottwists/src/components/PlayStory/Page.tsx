import React from "react";
import {Box, Paper, Rating, Stack, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import PageContent from "./PageContent";


const Page: React.FC = () => {
    return (
        <Paper elevation={3} sx={{paddingBottom: 10}}>
            <div style={{paddingBottom: 30}}>
                <Typography textAlign='center' variant='h4' sx={{paddingTop: 5, paddingBottom: 1}}>
                    1. Chapter Title
                </Typography>
               <Stack direction="row" alignItems='center' justifyContent="center" spacing={2} sx={{paddingBottom:1}}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <VisibilityIcon sx={{color:"#5c5959"}}/>
                        <Typography variant="body2" sx={{color:"#5c5959"}}>1.8M</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Rating name="read-only" value={3.7} readOnly  precision={0.5}/>
                        <Typography variant="body2" sx={{color:"#5c5959"}}>3.7</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <ModeCommentIcon sx={{color:"#5c5959"}}/>
                        <Typography variant="body2" sx={{color:"#5c5959"}}>5.7K</Typography>
                    </Stack>
                </Stack>
                <Divider variant="middle"/>
            </div>
            <PageContent/>
        </Paper>
    );
};
export default Page;