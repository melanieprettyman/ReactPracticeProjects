import {useDecisionContext} from "../NewPart/Store/Context";
import {
    Box,
    FormControl, IconButton,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack, TextField,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import CancelIcon from "@mui/icons-material/Cancel";
import TextEditor from "../NewPart/Scene/TextEditor";
import {Handle, Position, useReactFlow} from '@xyflow/react';
import CloseIcon from "@mui/icons-material/Close";


export default function Node({id}) {
    const {decisionNumber, setDecisionNumber} = useDecisionContext();

    const handleChange = (event) => {
        setDecisionNumber(event.target.value);
    };

    const [uploadedFile, setUploadedFile] = useState(null);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            setUploadedFile(file);
            setFileName(file.name);
        }
    };

    const removeFile = () => {
        setUploadedFile(null);
        setFileName('');
    };


    const DecisionDropDown = () => {
        return (
            <Box display="flex" alignItems="center" width={400}>
                <Typography variant="h5" marginRight={2} noWrap sx={{flexShrink: 0}}>
                    Number of Decisions:
                </Typography>
                <FormControl variant="outlined" fullWidth className="nodrag">
                    <InputLabel id="decision-number-label" shrink={false} style={{display: 'none'}}>Number of
                        Decisions</InputLabel>
                    <Select
                        labelId="decision-number-label"
                        value={decisionNumber}
                        onChange={handleChange}
                        displayEmpty
                    >
                        {[0, 2, 3, 4].map(num => (
                            <MenuItem key={num} value={num}>{num}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        );
    }

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
                            <Box sx={{display: 'flex', justifyContent: 'end'}}>
                                <IconButton color="primary" component="label" className="nodrag" >
                                    <CloseIcon/>
                                </IconButton>
                            </Box>
                        </Stack>

                        <Stack spacing={1}>
                            <Typography variant='h5'>Scene Title:</Typography>
                            <TextField id="outlined-basic" variant="outlined" className="nodrag"/>
                        </Stack>
                        <Stack spacing={1} className="nodrag">
                            <Typography variant='h5'>Scene Description:</Typography>
                            <TextEditor/>
                        </Stack>
                        <DecisionDropDown/>
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