import React, {useState} from "react";
import {
    AppBar,
    Box,
    Container,
    FormControl, Grid,
    MenuItem, Paper,
    Select,
    SelectChangeEvent,
    Toolbar,
    Typography
} from "@mui/material";
import Divider from "@mui/material/Divider";
import SynopsisCard from "./SynopsisCard";

function SortSelector() {
    const sortMenu = [
        {value: 1, label: 'Views'},
        {value: 2, label: 'Rating'},
        {value:3, label:'Completed'}
    ];
    const [sortBy, setSortBy] = useState(sortMenu[0].value.toString());

    const handleChange = (event: SelectChangeEvent) => {
        setSortBy(event.target.value as string);
    };

    return (
        <Box sx={{minWidth: 110}}>
            <FormControl fullWidth>
                <Select
                    id="sortSelector"
                    value={sortBy}
                    onChange={handleChange}
                    variant="standard"
                >
                    {sortMenu.map(sortMenu =>
                        <MenuItem key={sortMenu.value} value={sortMenu.value} sx={{paddingLeft:1}}>
                            {sortMenu.label}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box>
    );
}

const SynopsisContainer: React.FC = () => {
    return (
        <Box sx={{flexGrow: 1, width: '100%'}}>
            <Paper>
                <AppBar position="static" sx={{
                    backgroundColor: "white",
                    height: 50,
                    boxShadow: 'none'
                }}>
                    <Toolbar sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Typography sx={{fontWeight: 600, color: 'black'}}> 2K Stories </Typography>
                        <Box sx={{flexGrow: 1}}/>
                        <Typography sx={{fontWeight: 600, color: 'black', paddingRight: 1}}>Sort by:</Typography>
                        <SortSelector/>
                    </Toolbar>
                </AppBar>
                <Divider variant='middle'/>

                <Paper elevation={0} sx={{flexGrow: 1, padding: 6}}>
                    <Grid container spacing={6} sx={{maxHeight:1016,overflow:'auto'}}>
                        {Array.from({length: 40}, (_, index) => (
                            <Grid item key={index}> {/* Make sure to wrap each card in a Grid item if needed */}
                                <SynopsisCard/>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Paper>
        </Box>
    );
}
export default SynopsisContainer;