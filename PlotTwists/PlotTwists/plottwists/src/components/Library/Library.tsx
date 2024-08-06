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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import img from "../PlayStory/placeholder.png";
import Divider from "@mui/material/Divider";
import PartTile from "../CreateStory/PartTile";
import StoryDetails from "../CreateStory/StoryDetails";
import Navbar from "../Navbar/Navbar";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LibraryTile from "./LibraryTile";

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
            <Container sx={{mt: 4, width: '70%', maxHeight: '70%'}}>
                <Paper sx={{width: '100%', height: '100%', mb: 4, minHeight: 350, padding: 2}}>
                    <Typography variant={'h4'} sx={{fontWeight: 'bold'}}>Library</Typography>
                    <Box sx={{borderBottom: 1, borderColor: 'divider', paddingTop: 1}}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="CURRENT READS" {...a11yProps(0)}
                                 sx={{fontSize: 20, fontWeight: 'bold'}}/>
                            <Tab label="FINISHED READS" {...a11yProps(1)}
                                 sx={{fontSize: 20, fontWeight: 'bold'}}/>
                            <Tab label="TO READS" {...a11yProps(2)}
                                 sx={{fontSize: 20, fontWeight: 'bold'}}/>
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Grid container spacing={2} sx={{mb: 2, padding: 2}} columnSpacing={{xs: 1, sm: 2, md: 3}}>
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
                        <Grid container spacing={2} sx={{mb: 2, padding: 2}} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                            <LibraryTile/>
                            <LibraryTile/>
                        </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        <Grid container spacing={2} sx={{mb: 2, padding: 2}} columnSpacing={{xs: 1, sm: 2, md: 3}}>
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

