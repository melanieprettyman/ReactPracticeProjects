import React, {useState} from "react";
import Navbar from "../../Navbar/Navbar";
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid, IconButton,
    Paper,
    Stack,
    Tab,
    Tabs, TextField,
    Typography
} from "@mui/material";
import img from "../../PlayStory/placeholder.png";
import CreateIcon from '@mui/icons-material/Create';
import SynopsisCard from "../../CollectionPage/Synopsis/SynopsisCard";
import ProfileCard from "../Following/ProfileCard";
import Announcements from "./Announcements/Announcements";
import theme from "../../../Theme/Theme";
import MyFollowersDialog from "./MyFollowersDialog";
import {PhotoCamera} from "@mui/icons-material";
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ColorPickerDialog from "./ColorPickerDialog";
import userEvent from "@testing-library/user-event";

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

const bioStg = " I'm mostly on instagram--where I'm always ready to talk fictional crushes\n" +
    "                                            and\n" +
    "                                            nerd\n" +
    "                                            out over books. (Okay, okay. And I've also been known to share snippets and\n" +
    "                                            teasers\n" +
    "                                            from my upcoming novels, if you're into that sort of thing...) Please feel\n" +
    "                                            free\n" +
    "                                            to\n" +
    "                                            chat with me there @KerriManiscalco. I love talking with fellow readers!\n" +
    "\n" +
    "\n" +
    "                                            Kerri Maniscalco grew up in a semi-haunted house outside NYC where her\n" +
    "                                            fascination\n" +
    "                                            with gothic settings began. In her spare time she reads everything she can\n" +
    "                                            get\n" +
    "                                            her\n" +
    "                                            hands on, cooks all kinds of food with her family and friends, and drinks\n" +
    "                                            entirely\n" +
    "                                            too much tea while discussing life’s finer points with her cats.\n" +
    "\n" +
    "                                            She is the #1 NYT and USA Today bestselling author of the STALKING JACK THE\n" +
    "                                            RIPPER\n" +
    "                                            quartet, the KINGDOM OF THE WICKED trilogy, and her forthcoming adult debut,\n" +
    "                                            THRONE\n" +
    "                                            OF THE FALLEN, set within the KINGDOM OF THE WICKED universe. Two other\n" +
    "                                            un-named\n" +
    "                                            titles will also be set within the KOTW world and will follow two different\n" +
    "                                            princes."

const MyProfile: React.FC = () => {
    const [value, setValue] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Kerri Maniscalco");
    const [avatar, setAvatar] = useState(img);
    const [bio, setBio]=useState(bioStg);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

     const handleBioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBio(event.target.value);
    };

    const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                if (e.target && e.target.result) {
                    setAvatar(e.target.result.toString());
                }
            };
            fileReader.readAsDataURL(file);
        }
    };


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [bgColor, setBgColor] = useState('');


    const [colorPickerOpen, setColorPickerOpen] = useState(false);

    const handleColorPickerOpen = () => setColorPickerOpen(true);

    const handleColorPickerClose = (color: string) => {
        setBgColor(color);
        setColorPickerOpen(false);
    };


    return (
        <>
            <Navbar/>
            <Container sx={{mt: 4, width: '70%', height: '100%'}}>
                <Paper sx={{width: '100%', height: '100%', mb: 4, minHeight: 1000, background: bgColor}}>
                    <Stack>
                        <Stack direction='row' spacing={5} sx={{padding: 10}}>
                            <Stack spacing={5}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={avatar}
                                    sx={{width: 200, height: 200}}
                                />
                                <Button variant={"contained"} onClick={toggleEditMode}>
                                    <CreateIcon sx={{paddingRight: 2}}/>
                                    {editMode ? "Save Changes" : "Edit Profile"}
                                </Button>
                                {editMode && (
                                    <Stack spacing={1} alignItems="center">
                                        <label htmlFor="icon-button-file">
                                            <input accept="image/*" id="icon-button-file" type="file" hidden
                                                   onChange={handleAvatarChange}/>
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <PhotoCamera/>
                                                <Typography>Change profile picture</Typography>
                                            </IconButton>
                                        </label>
                                        <IconButton color="primary" component="span" onClick={handleColorPickerOpen}>
                                            <ColorLensIcon sx={{fontSize: 30}}/>
                                            <Typography>Change background</Typography>
                                        </IconButton>
                                    </Stack>
                                )}
                            </Stack>
                            <Stack spacing={1} sx={{paddingTop: 2}}>
                                {editMode ? (
                                    <TextField
                                        label="Name"
                                        variant="outlined"
                                        value={name}
                                        onChange={handleNameChange}
                                        fullWidth
                                    />
                                ) : (
                                    <Typography variant={'h4'} sx={{fontWeight: 'bold'}}>{name}</Typography>
                                )}
                                <Typography variant={'h5'}
                                            sx={{fontWeight: 'bold', paddingBottom: 4}}>@username</Typography>

                                <Stack direction='row' spacing={3} alignItems={'center'}>
                                    <Stack alignItems={'center'}>
                                        <Typography sx={{fontWeight: 'bold'}}>1</Typography>
                                        <Typography sx={{fontWeight: 'bold'}}>WORKS</Typography>
                                    </Stack>
                                    <Stack
                                        sx={{
                                            '&:hover': {
                                                color: theme.palette.primary.main
                                            }
                                        }}
                                    >
                                        <Stack onClick={handleClickOpen} alignItems={'center'}>
                                            <Typography sx={{fontWeight: 'bold'}}>1</Typography>
                                            <Typography sx={{fontWeight: 'bold'}}>FOLLOWERS</Typography>
                                        </Stack>
                                    </Stack>
                                </Stack>
                                <Box sx={{borderBottom: 1, borderColor: 'divider', paddingTop: 4}}>
                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                        <Tab label="ABOUT" {...a11yProps(0)} sx={{fontSize: 20, fontWeight: 'bold'}}/>
                                        <Tab label="FOLLOWING" {...a11yProps(1)}
                                             sx={{fontSize: 20, fontWeight: 'bold'}}/>
                                        <Tab label="UPDATES" {...a11yProps(2)}
                                             sx={{fontSize: 20, fontWeight: 'bold'}}/>
                                    </Tabs>
                                </Box>
                                <CustomTabPanel value={value} index={0}>
                                    {editMode ? (
                                        <TextField
                                            sx={{
                                                fontSize: 18, background: 'white', mt: 2,
                                                mb: 2, minWidth: 750, borderRadius:2
                                            }}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            multiline
                                            value={bio}
                                            rows={12}
                                            placeholder={"Help people get to know you..."}
                                            onChange={handleBioChange}
                                        />
                                    ) : (
                                        <Typography sx={{fontSize: 18, paddingBottom: 3, minWidth: 750}}>
                                            {bio}
                                        </Typography>
                                    )}


                                    <Paper sx={{padding: 2}}>
                                        <Typography variant={'h5'} sx={{paddingBottom: 2}}>Stories by
                                            Username</Typography>
                                        <Stack spacing={4} sx={{fontWeight: 'bold', maxHeight: 720, overflow: 'auto'}}>
                                            <SynopsisCard/>
                                            <SynopsisCard/>
                                            <SynopsisCard/>
                                            <SynopsisCard/>
                                            <SynopsisCard/>
                                        </Stack>
                                    </Paper>
                                </CustomTabPanel>
                                <CustomTabPanel value={value} index={1}>
                                    <Paper sx={{ width: 720, maxWidth: 'none', overflow: 'auto'}}>
                                        <Grid container
                                              sx={{maxHeight: 1016, overflow: 'auto'}}>
                                            {Array.from({length: 14}).map((_, index) => (
                                                <ProfileCard key={index} />
                                            ))}
                                        </Grid>
                                    </Paper>
                                </CustomTabPanel>

                                <CustomTabPanel value={value} index={2}>
                                    <Container sx={{
                                        width: 720,
                                        maxWidth: 'none',
                                        minHeight: 1016,
                                        overflow: 'auto'
                                    }}>
                                        <Container sx={{width: 710, minHeight: 1016}}>
                                            <Announcements isMyProfile={true}/>
                                        </Container>

                                    </Container>
                                </CustomTabPanel>

                            </Stack>
                        </Stack>
                    </Stack>
                    <MyFollowersDialog open={open} handleClose={handleClose}/>
                    <ColorPickerDialog
                        open={colorPickerOpen}
                        onClose={() => setColorPickerOpen(false)}
                        onColorSelect={handleColorPickerClose}
                    />
                </Paper>
            </Container>
        </>
    );
};

export default MyProfile;