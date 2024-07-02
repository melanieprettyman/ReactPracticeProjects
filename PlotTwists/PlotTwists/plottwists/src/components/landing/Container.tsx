import React, {useState} from 'react';
import {AppBar, Button, Toolbar} from "@mui/material";
import {LANDING_TABS, LANDING_TABS_LABEL} from "./constants";
import logo from '../../Utils/logo.png';
import styles from "./styles";
import LoginForm from "./Form";
import {ThemeProvider} from "@mui/material/styles";
import Theme from "./Theme/Theme";
import SignupForm from "./SignupForm";

const LandingContainer: React.FC = () => {
    const [selectedTab, setSelectedTab] = useState(LANDING_TABS.LOG_IN);

    const [open, setOpen] = useState(true);
    const [openSignup, setOpenSignup] = useState(false);

    const handleChangeTab = (event: React.ChangeEvent<{}>, value: number): void => {
        setSelectedTab(value);
    };

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

    return (
        <>
            <AppBar position="fixed" sx={styles.appbar}>
                <Toolbar sx={styles.toolbar}>
                    <img src={logo} alt="Plot Twists Logo" style={styles.img}/>
                    <div style={{flexGrow: 1}}/>
                    <Button variant="text" sx={styles.tabs} onClick={handleClickOpen} color="primary">
                        {LANDING_TABS_LABEL.LOG_IN}
                    </Button>
                    <Button variant="text" sx={styles.tabs} onClick={handleClickOpenSignup} color="primary">
                        {LANDING_TABS_LABEL.SIGN_UP}
                    </Button>
                </Toolbar>
            </AppBar>
            <LoginForm open={open} handleClose={handleClose}/>
            <SignupForm open={openSignup} handleClose={handleCloseSignup}/>
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
