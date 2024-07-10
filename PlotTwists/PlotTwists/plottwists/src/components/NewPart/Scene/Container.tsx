import React, {useState} from "react";
import {
    Box,
    FormControl, IconButton, InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import TextEditor from "./TextEditor";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CancelIcon from '@mui/icons-material/Cancel';
import {useDecisionContext} from "../Store/Context";



interface Decision {
    id: number;
}


const Scene: React.FC = () => {

    const { decisionNumber, setDecisionNumber } = useDecisionContext();

    const handleChange = (event: SelectChangeEvent<number>) => {
        setDecisionNumber(event.target.value as number);
    };

    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="decision-number-label" shrink={false} style={{display: 'none'}}>Number of
                        Decisions</InputLabel>
                    <Select
                        labelId="decision-number-label"
                        value={decisionNumber}
                        onChange={handleChange}
                        displayEmpty
                    >
                        {[0,2, 3, 4].map(num => (
                            <MenuItem key={num} value={num}>{num}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        );
    }

    return (
        <>
            <Paper
                variant="outlined"
                sx={{width: 650, height: 550, borderRadius: 3, borderWidth: 3, padding: 5}}
            >
                <Stack spacing={3}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <IconButton color="primary" component="label">
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

                    <Stack spacing={1}>
                        <Typography variant='h5'>Scene Title:</Typography>
                        <TextField id="outlined-basic" variant="outlined"/>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography variant='h5'>Scene Description:</Typography>
                        <TextEditor/>
                    </Stack>
                    <DecisionDropDown/>
                </Stack>
            </Paper>
        </>
    );
};

export default Scene;