import React, {useState} from "react";
import {
    AppBar,
    Box,
    Button, ButtonBase, Card, CardContent, CardMedia,
    Container,
    Grid,
    IconButton,
    Paper, Rating,
    Stack,
    Tab,
    Tabs,
    Toolbar,
    Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import LibraryTile from "./LibraryTile";
import styles from './styles'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export function CustomTabPanel(props: TabPanelProps) {
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

const Library: React.FC = () => {
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

    let navigate = useNavigate();


    return (
        <>
            <Navbar/>
            <Container sx={styles.pageContainer}>
                <Paper sx={styles.topContainer}>
                    <Typography variant={'h4'} sx={{fontWeight: 'bold'}}>Library</Typography>
                    <Box sx={styles.tabContainer}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="CURRENT READS" {...a11yProps(0)}
                                 sx={styles.tabHeader}/>
                            <Tab label="FINISHED READS" {...a11yProps(1)}
                                 sx={styles.tabHeader}/>
                            <Tab label="TO READS" {...a11yProps(2)}
                                 sx={styles.tabHeader}/>
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Grid container spacing={2} sx={styles.pannel} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                            <LibraryTile/>
                            <LibraryTile/>
                            <LibraryTile/>
                            <LibraryTile/>
                            <LibraryTile/>
                            <LibraryTile/>
                            <LibraryTile/>
                            <LibraryTile/>
                        </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <Grid container spacing={2} sx={styles.pannel} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                            <LibraryTile/>
                            <LibraryTile/>
                        </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Grid container spacing={2} sx={styles.pannel} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                            <LibraryTile/>
                            <LibraryTile/>
                            <LibraryTile/>
                            <LibraryTile/>
                        </Grid>
                    </CustomTabPanel>
                </Paper>

            </Container>
        </>
    );
};

export default Library;

