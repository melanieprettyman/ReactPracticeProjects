import React from "react";
import Navbar from "../navbar/Navbar";
import {Container} from "@mui/material";

const Notifications: React.FC = () => {
    return(
        <>
            <Navbar/>
            <Container sx={{mt: 4, width: '70%', maxHeight: '70%'}}>
                <p>hi</p>
            </Container>
        </>
    );
};
export default Notifications;