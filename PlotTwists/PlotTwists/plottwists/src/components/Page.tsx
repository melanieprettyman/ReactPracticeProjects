import React from "react";
import {Paper, Typography} from "@mui/material";
import PageContent from "./PageContent";

const Page: React.FC = () => {
    return(
        <Paper elevation={3} sx={{paddingBottom:10}}>
            <Typography textAlign='center' variant='h5' sx={{padding:5}}>
                1. Chapter Title
            </Typography>
            <PageContent/>
        </Paper>
    );
};
export default Page;