import {Avatar, Box, Button, Checkbox, IconButton, Paper, Stack, TextField, Typography} from '@mui/material'
import React from 'react'
import img from "../playStory/placeholder.png";
import DeleteIcon from '@mui/icons-material/Delete';

const Posts: React.FC = () => {
    return (
        <Paper sx={{padding: 2}}>
            <Stack>
                <Stack direction={'row'} spacing={1} sx={{paddingBottom: 1}}>
                    <Avatar alt="Remy Sharp" src={img}
                            sx={{width: 50, height: 50}}
                    />
                    <Stack sx={{flexGrow: 1}}>
                        <Typography variant={'h6'} sx={{fontWeight: 'bold'}}>Name</Typography>
                        <Typography variant="caption" color="text.secondary">
                            A few seconds ago
                        </Typography>
                    </Stack>
                    <IconButton>
                        <DeleteIcon/>

                    </IconButton>
                </Stack>
                <Typography>New updates, make sure to check it out!!!</Typography>
            </Stack>
        </Paper>
    );
};

const Updates: React.FC = () => {
    return (
        <>
            <Box
                sx={{backgroundColor: 'lightgrey', width: '100%', borderRadius: 1.5}}
            >
                <Stack sx={{padding: 2}}>
                    <Stack direction={'row'} spacing={1}>
                        <Avatar alt="Remy Sharp" src={img}
                                sx={{width: 50, height: 50}}
                        />
                        <TextField id="outlined-basic" variant="outlined" fullWidth multiline maxRows={4}
                                   sx={{backgroundColor: 'white', borderRadius: 1.5}}/>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Checkbox defaultChecked/>
                        <Typography variant="caption" color="text.secondary" sx={{flexGrow: 1}}>
                            Alert my followers
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            1/2000
                        </Typography>
                        <Button variant="contained" size="small">Post</Button>
                    </Stack>

                </Stack>
            </Box>

            <Stack spacing={2} sx={{mt: 2}}>
                <Posts/>
                <Posts/>
                <Posts/>
            </Stack>
        </>
    )
}

export default Updates