import React from "react";
import {Avatar, IconButton, Paper, Stack, Typography} from "@mui/material";
import img from "../PlayStory/placeholder.png";
import DeleteIcon from "@mui/icons-material/Delete";

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

export default Post;