import React, {useState} from "react";
import {
    AppBar,
    Box,
    Button,
    Container, IconButton,
    Paper,
    Stack,
    Tab,
    Tabs, Toolbar,
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import img from "../PlayStory/placeholder.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateIcon from '@mui/icons-material/Create';
import Divider from "@mui/material/Divider";
import StoryDetails from "../CreateStory/FormContent/StoryDetails";
import PartTile from "./PartTile";
import styles from './styles';

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

const EditStoryDetails: React.FC = () => {
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

    // Function to handle back navigation
    const handleBack = () => {
        navigate(-1);
    };

    const navigateToCreateStory = () => {
        navigate("/create-story");
    };

    const [parts, setParts] = useState([
        {id: 1, content: 'Part 1'},
        {id: 2, content: 'Part 2'},
        {id: 3, content: 'Part 3'}
    ]);

    // @ts-ignore
    const handleDeletePart = (partId) => {
        setParts(parts.filter(part => part.id !== partId));
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={styles.appBar}>
                <Toolbar sx={styles.toolBar}>
                    <IconButton onClick={handleBack}>
                        <ArrowBackIcon sx={styles.backArrow}/>
                    </IconButton>
                    <Box sx={{flexGrow: 1}}></Box>
                    <Button variant={'contained'} sx={{fontWeight: 'bold'}}>
                        Save
                    </Button>
                </Toolbar>
            </AppBar>
            <Container sx={styles.pageContainer}>
                <Stack direction={'row'} spacing={3}>
                    <ImageWithEditButton initialImgSrc={img}/>
                    <Paper sx={styles.tabContainer}>
                        <Box sx={styles.tabContainerBorder}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="TABLE OF CONTENTS" {...a11yProps(0)}
                                     sx={styles.header}/>
                                <Tab label="STORY DETAILS" {...a11yProps(1)}
                                     sx={styles.header}/>
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Stack spacing={4} sx={styles.pannel}>
                                <Button variant={'contained'} sx={styles.newPartBtn}
                                        onClick={navigateToCreateStory}>
                                    + New Part
                                </Button>
                                <Divider/>
                                {parts.map(part => (
                                    <>
                                        <PartTile key={part.id} partId={part.id} onDelete={handleDeletePart}/>
                                        <Divider/>
                                    </>
                                ))}
                            </Stack>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Box sx={{padding: 2}}>
                                <StoryDetails/>
                            </Box>
                        </CustomTabPanel>
                    </Paper>
                </Stack>
            </Container>
        </Box>
    );
};

export default EditStoryDetails;


// @ts-ignore
const ImageWithEditButton = ({initialImgSrc}) => {
    const [imgSrc, setImgSrc] = useState(initialImgSrc);

    // @ts-ignore
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.substr(0, 5) === 'image') {
            setImgSrc(URL.createObjectURL(file)); // Update the image preview
        } else {
            return;
        }
    };

    return (
        <Box sx={styles.imgContainer}>
            <img src={imgSrc} alt="scene picture" style={styles.imgRatio}/>
            <label htmlFor="image-upload">
                <input
                    accept="image/*"
                    id="image-upload"
                    type="file"
                    style={{display: 'none'}}
                    onChange={handleImageChange}
                />
                <IconButton
                    component="span"
                    sx={styles.editImgBtn}
                >
                    <CreateIcon/>
                    Edit
                </IconButton>
            </label>
        </Box>
    );
};



