import {Avatar, Box, Button, Checkbox, IconButton, Paper, Stack, TextField, Typography} from '@mui/material'
import React, { useState } from 'react'
import img from "../playStory/placeholder.png";
import DeleteIcon from '@mui/icons-material/Delete';

const Post: React.FC<{ content: string, onDelete: () => void }> = ({ content, onDelete }) => {
    return (
        <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <Stack>
                <Stack direction={'row'} spacing={1} sx={{ paddingBottom: 1 }}>
                    <Avatar alt="Remy Sharp" src={img} sx={{ width: 50, height: 50 }} />
                    <Stack sx={{ flexGrow: 1 }}>
                        <Typography variant={'h6'} sx={{ fontWeight: 'bold' }}>Name</Typography>
                        <Typography variant="caption" color="text.secondary">
                            A few seconds ago
                        </Typography>
                    </Stack>
                    <IconButton onClick={onDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Stack>
                <Typography>{content}</Typography>
            </Stack>
        </Paper>
    );
};

const Updates: React.FC = () => {
    const [postText, setPostText] = useState('');
    const [posts, setPosts] = useState<string[]>([]);

    const handlePost = () => {
        if (postText.trim()) {
            setPosts([postText, ...posts]);
            setPostText('');
        }
    };

    const handleDeletePost = (index: number) => {
        setPosts(currentPosts => currentPosts.filter((_, i) => i !== index));
    };

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
                       <TextField
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            multiline
                            maxRows={4}
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            sx={{ backgroundColor: 'white', borderRadius: 1.5 }}
                        />
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Checkbox />
                        <Typography variant="caption" color="text.secondary" sx={{flexGrow: 1}}>
                            Alert my followers
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                           {`${postText.length}/2000`}
                        </Typography>
                        <Button variant="contained" size="small" onClick={handlePost}>Post</Button>
                    </Stack>

                </Stack>
            </Box>

            <Stack spacing={2} sx={{ mt: 2 }}>
                {posts.map((post, index) => (
                    <Post key={index} content={post} onDelete={() => handleDeletePost(index)} />
                ))}


            </Stack>

        </>
    )
}

export default Updates