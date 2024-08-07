import React from "react";
import Navbar from "../Navbar/Navbar";
import {Container, Stack, Typography} from "@mui/material";
import NotificationCard from "./NotificationCard";


const Notifications: React.FC = () => {
    return (
        <>
            <Navbar/>
            <Container sx={{mt: 4, width: '70%', maxHeight:1016, padding:2}}>
                <Typography variant={'h4'} sx={{fontWeight: 'bold', paddingBottom: 2}}>Notifications</Typography>
                <Stack spacing={2} sx={{paddingBottom: 2}}>
                    <NotificationCard announcement={false}/>
                    <NotificationCard announcement={true}/>
                    <NotificationCard announcement={false}/>
                    <NotificationCard announcement={true}/>
                    <NotificationCard announcement={false}/>
                    <NotificationCard announcement={true}/>
                    <NotificationCard announcement={false}/>
                    <NotificationCard announcement={true}/>
                    <NotificationCard announcement={false}/>
                    <NotificationCard announcement={true}/>
                    <NotificationCard announcement={false}/>
                    <NotificationCard announcement={true}/>
                    <NotificationCard announcement={false}/>
                    <NotificationCard announcement={true}/>
                    <NotificationCard announcement={false}/>
                    <NotificationCard announcement={true}/>
                </Stack>
            </Container>
        </>
    );
};
export default Notifications;