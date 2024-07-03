//TODO: on a successful login go to homepage
// Send forgot password email
// Send confirmation email on successful signup
import React, {useState} from 'react';
import {AppBar, Button, Toolbar} from "@mui/material";
import logo from '../../Utils/logo.png';
import styles from "./styles";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "./Theme/Theme";
import SignupForm from "./forms/SignupForm";
import LoginForm from "./forms/LoginForm";
import ForgotPassword from "./forms/ForgotPassword";

const LandingContainer: React.FC = () => {
    const [open, setOpen] = useState(true);
    const [openSignup, setOpenSignup] = useState(false);
    const [openForgotPassword, setForgotPassword] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenSignup = () => {
        setOpenSignup(true);
    };

    const handleCloseSignup = () => {
        setOpenSignup(false);
    };

    const handleClickOpenForgotPassword = () => {
        setForgotPassword(true);
    };

    const handleCloseForgotPassword = () => {
        setForgotPassword(false);
    };

    return (
        <>
            <AppBar position="fixed" sx={styles.appbar}>
                <Toolbar sx={styles.toolbar}>
                    <img src={logo} alt="Plot Twists Logo" style={styles.img}/>
                    <div style={{flexGrow: 1}}/>
                    <Button variant="text" sx={styles.tabs} onClick={handleClickOpen} color="primary">
                        Log in
                    </Button>
                    <Button variant="text" sx={styles.tabs} onClick={handleClickOpenSignup} color="primary">
                        Sign up
                    </Button>
                </Toolbar>
            </AppBar>
            <LoginForm open={open} handleClose={handleClose} handleClickOpenForgotPassword={handleClickOpenForgotPassword} />
            <SignupForm open={openSignup} handleClose={handleCloseSignup}/>
            <ForgotPassword open={openForgotPassword} handleClose={handleCloseForgotPassword} handleCloseLogin={handleClose}/>
        </>

    )
};

const LandingPage: React.FC = () => {
    return (
        <ThemeProvider theme={Theme}>
            <LandingContainer/>
        </ThemeProvider>
    );
}
export default LandingPage;
