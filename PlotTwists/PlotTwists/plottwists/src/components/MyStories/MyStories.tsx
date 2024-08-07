import React from "react";
import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Tab,
    Tabs,
    Typography
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import MyStoryCard from "./MyStoryCard";
import styles from './styles'
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

const MyStories: React.FC = () => {
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

    const navigateToCreateStory = () => {
        navigate("/create-story");
    };

    return (
        <>
            <Navbar/>
            <Container sx={styles.pageContainer}>
                <Paper sx={styles.contentContainer}>
                    <Stack direction={'row'} sx={{padding: 2}}>
                        <Typography variant={'h4'} sx={styles.header}>
                            My Stories
                        </Typography>
                        <Button variant={'contained'} sx={{fontWeight: 'bold'}} onClick={navigateToCreateStory}>
                            + New Story
                        </Button>
                    </Stack>
                    <Box sx={styles.tabContainer}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="PUBLISHED" {...a11yProps(0)} sx={styles.tabHeader}/>
                            <Tab label="DRAFTS" {...a11yProps(1)} sx={styles.tabHeader}/>
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Stack spacing={4} sx={styles.panel}>
                            <MyStoryCard/>
                        </Stack>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                    </CustomTabPanel>
                </Paper>
            </Container>
        </>
    );
};

export default MyStories;