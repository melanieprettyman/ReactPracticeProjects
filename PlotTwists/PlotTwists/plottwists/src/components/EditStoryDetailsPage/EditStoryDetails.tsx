import React, {useState} from "react";
import {
    AppBar,
    Box,
    Button,
    Container, IconButton,
    Paper, Rating,
    Stack,
    Tab,
    Tabs, Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import Navbar from "../Navbar/Navbar";
import {useNavigate} from "react-router-dom";
import img from "../PlayStory/placeholder.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FileUpload from "../CreateStory/FileUpload";
import CreateIcon from '@mui/icons-material/Create';
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from "@mui/material/Divider";
import StoryDetails from "../CreateStory/StoryDetails";
import PartTile from "../CreateStory/PartTile";

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
            <AppBar position="static" sx={{
                backgroundColor: "white",
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                height: 100
            }}>
                <Toolbar sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <IconButton onClick={handleBack}>
                        <ArrowBackIcon sx={{fontSize: 60, paddingTop: 1}}/>
                    </IconButton>
                    <Box sx={{flexGrow: 1}}></Box>
                    <Button variant={'contained'} sx={{fontWeight: 'bold'}}>
                        Save
                    </Button>
                </Toolbar>
            </AppBar>
            <Container sx={{mt: 4, width: '70%', height: '100%'}}>
                <Stack direction={'row'} spacing={3}>
                    <ImageWithEditButton initialImgSrc={img}/>
                    <Paper sx={{width: '100%', height: '100%', mb: 4, minHeight: 350}}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider', paddingTop: 1}}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="TABLE OF CONTENTS" {...a11yProps(0)}
                                     sx={{fontSize: 20, fontWeight: 'bold'}}/>
                                <Tab label="STORY DETAILS" {...a11yProps(1)}
                                     sx={{fontSize: 20, fontWeight: 'bold'}}/>
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Stack spacing={4} sx={{mb: 2, padding: 2}}>
                                <Button variant={'contained'} sx={{fontWeight: 'bold', width: 200}}
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
        <Box sx={{position: 'relative', minWidth: 300, maxWidth: 300}}>
            <img src={imgSrc} alt="scene picture" style={{width: '100%', height: 'auto', aspectRatio: '11 / 16'}}/>
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
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        '&:hover': {
                            backgroundColor: 'rgba(255,255,255,0.9)',
                        },
                        color: 'primary.main',
                        minHeight: 40,
                        minWidth: 40,
                        borderRadius: 0
                    }}
                >
                    <CreateIcon/>
                    Edit
                </IconButton>
            </label>
        </Box>
    );
};



