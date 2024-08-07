import React, {useState} from "react";
import {
    AppBar, Avatar,
    Box,
    Button,
    Container,
    FormControl, IconButton, MenuItem, Rating,
    Select, SelectChangeEvent,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import PlayStoryContainer from "./Content/PlayStoryContainer";
import img from "./placeholder.png";
import StoryCommentSection from "./CommentSection";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {useNavigate} from "react-router-dom";


const partsMenu = [
    {value: 1, label: 'Part 1'},
    {value: 2, label: 'Part 2'},
    {value: 3, label: 'Part 3'}
];

function PartSelector() {
    const mostRecentPart = partsMenu[partsMenu.length - 1].value.toString();

    const [part, setPart] = useState(mostRecentPart);

    const handleChange = (event: SelectChangeEvent) => {
        setPart(event.target.value as string);
    };

    return (
        <Box sx={{minWidth: 120, maxWidth: 250}}>
            <FormControl fullWidth>
                <Select
                    id="demo-simple-select"
                    value={part}
                    onChange={handleChange}
                >
                    {partsMenu.map(menuItem =>
                        <MenuItem key={menuItem.value} value={menuItem.value}>
                            {menuItem.label}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
}

const PlayStory: React.FC = () => {
    const navigate = useNavigate();  // Initialize navigate function

    // Function to handle back navigation
    const handleBack = () => {
        navigate(-1);
    };

   const handleNavigationToProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();  // Prevent the event from propagating to the parent button
        navigate("/user");
    };

    const [value, setValue] = React.useState<number | null>(null);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{
                backgroundColor: "white",
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
                height: 100
            }}>
                <Toolbar sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <IconButton onClick={handleBack}>
                        <ArrowBackIcon sx={{fontSize: 60, paddingTop: 1, paddingRight: 1}}/>
                    </IconButton>

                    <img src={img} alt='scene picture'
                         style={{
                             height: 'auto',
                             aspectRatio: '11 / 16',
                             maxWidth: 50,
                             paddingTop: 10
                         }}/>
                    <Stack sx={{paddingTop: 1, paddingRight: 1}}>
                        <Typography variant='h4'
                                    sx={{color: 'black', paddingRight: 2, paddingLeft: 1}}>Title:</Typography>
                        <Stack direction='row' alignItems='center' justifyContent="center">
                            <Typography variant='h6'
                                        sx={{color: 'black', paddingLeft: 1, paddingRight: 1}}>by</Typography>
                            <Button onClick={(event) => handleNavigationToProfile(event)}>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={img}
                                    sx={{width: 24, height: 24}}
                                />
                                <Typography variant='h6'
                                            sx={{color: 'black', paddingLeft: 1}}>Author</Typography>
                            </Button>
                        </Stack>
                    </Stack>

                    <PartSelector/>

                    <Box sx={{flexGrow: 1}}/>

                    <Box>
                        <Stack direction="row" spacing={1}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <Typography variant="body2" sx={{color: "#5B2981ff", fontSize: 18}}>RATE</Typography>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Stack>
                            <Button variant="contained">Save</Button>
                            <Button variant="contained">Restart</Button>
                            <Button variant="contained">Quit</Button>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container sx={{mt: .2, width: '70%', height: '100%'}}>
                <Stack spacing={3}>
                    <PlayStoryContainer/>
                    <Button fullWidth variant='contained'
                            sx={{fontWeight: 900, height: 50, borderRadius: '30px', backgroundColor: 'black', '&:hover': {
                        bgcolor: '#3d3c3c',
                    },}}>
                        Continue to next part
                    </Button>
                    <StoryCommentSection/>
                </Stack>
            </Container>


        </Box>
    );
};

export default PlayStory;