import {
    Box,
    IconButton,
    Paper,
    Stack, TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CancelIcon from "@mui/icons-material/Cancel";
import TextEditor from "./TextEditor";
import {Handle, Position} from '@xyflow/react';
import {useAppContext} from "../../../../Store/Context";


export default function Node({id}) {
    const { nodesInfo, updateNode } = useAppContext();
    const node = nodesInfo[id] || { type: 'scene', description: '', title: '', imageUrl: '', fileName: '' };

     // Assume default values based on type
    const [title, setTitle] = useState(node.title || '');
    const [description, setDescription] = useState(node.description);
    const [imageUrl, setImageUrl] = useState(node.imageUrl || '');
    const [fileName, setFileName] = useState(node.fileName || '');

    useEffect(() => {
        // Prepare the updated node data based on type
        const updatedData = { title, description, imageUrl, fileName };
        updateNode(id, updatedData);
    }, [title, description, imageUrl, fileName, id, updateNode, node.type]);


    const handleFileChange = (event) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            setImageUrl(file);
            setFileName(file.name);
        }
    };

    const removeFile = () => {
        setImageUrl(null);
        setFileName('');
    };

    return (
        <>
            <div className="text-updater-node">
                <Handle
                    type="target"
                    position={Position.Top}
                    isConnectable={true}
                    style={{ width: '15px', height: '15px', background: '#555' }}
                />
                <Paper
                    variant="outlined"
                    sx={{width: 650, height: 550, borderRadius: 3, borderWidth: 3, padding: 5}}
                >
                    <Stack spacing={3}>
                        <Stack direction='row' sx={{ width: '100%' }}>
                            <Box sx={{display: 'flex', alignItems: 'center',flexGrow: 1}}>
                                <IconButton color="primary" component="label" className="nodrag">
                                    <AddPhotoAlternateIcon sx={{fontSize: 40}}/>
                                    <input type="file" hidden onChange={handleFileChange} accept="image/*"/>
                                </IconButton>
                                {fileName && (
                                    <Box sx={{display: 'flex', alignItems: 'center', ml: 2}}>
                                        <Typography variant="body1">{fileName}</Typography>
                                        <IconButton onClick={removeFile}>
                                            <CancelIcon/>
                                        </IconButton>
                                    </Box>
                                )}
                            </Box>
                        </Stack>

                        <Stack spacing={1}>
                            <Typography variant='h5'>Scene Title:</Typography>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                className="nodrag"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Stack>
                        <Stack spacing={1} className="nodrag">
                            <Typography variant='h5'>Scene Description:</Typography>
                            <TextEditor setDescription={setDescription}/>
                        </Stack>
                    </Stack>
                </Paper>
                <Handle
                    type="source"
                    position={Position.Bottom}
                    id="a"
                    isConnectable={true}
                    style={{ width: '15px', height: '15px', background: '#555' }}
                />
            </div>
        </>
    );
};

// <Box sx={{display: 'flex', justifyContent: 'end'}}>
//                                 <IconButton color="primary" component="label" className="nodrag" >
//                                     <CloseIcon/>
//                                 </IconButton>
//                             </Box>