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
import styles from "../styles";

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
        <Box sx={styles.synopsisContainer}>
            <Paper>
                <AppBar position="static" sx={styles.appBar}>
                    <Toolbar sx={styles.toolBar}>
                        <Typography sx={styles.header}> 2K Stories </Typography>
                        <Box sx={{flexGrow: 1}}/>
                        <Typography sx={styles.header}>Sort by:</Typography>
                        <SortSelector/>
                    </Toolbar>
                </AppBar>
                <Divider variant='middle'/>

                <Paper elevation={0} sx={styles.synopsisInnerContainer}>
                    <Grid container spacing={6} sx={styles.synopsisScrollBar}>
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