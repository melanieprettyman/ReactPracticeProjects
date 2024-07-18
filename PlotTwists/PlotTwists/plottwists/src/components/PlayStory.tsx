import React, {useState} from "react";
import {
    AppBar,
    Box,
    Button,
    Container,
    FormControl, MenuItem,
    Select, SelectChangeEvent,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import Page from "./Page";
import img from "./placeholder.png";


const partsMenu = [
    { value: 1, label: 'Part 1' },
    { value: 2, label: 'Part 2' },
    { value: 3, label: 'Part 3' }
];
function PartSelector() {
    const mostRecentPart = partsMenu[partsMenu.length - 1].value.toString();

    const [part, setPart] = useState(mostRecentPart);

    const handleChange = (event: SelectChangeEvent) => {
        setPart(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
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
                    <img src={img} alt='scene picture'
                         style={{
                             height: 'auto',
                             aspectRatio: '11 / 16',
                             maxWidth:40,
                         }}/>
                    <Typography variant='h4' sx={{color: 'black', paddingRight: 2, paddingLeft: 1}}>
                        Title:
                    </Typography>

                    <PartSelector/>

                    <Box sx={{flexGrow: 1}}/>

                    <Box>
                        <Stack direction="row" spacing={1}>
                            <Button variant="contained">Save</Button>
                            <Button variant="contained">Restart</Button>
                            <Button variant="contained">Quit</Button>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container sx={{mt: .2, width: '70%', height: '100%'}}>
                <Page/>
            </Container>

        </Box>
    );
};

export default PlayStory;