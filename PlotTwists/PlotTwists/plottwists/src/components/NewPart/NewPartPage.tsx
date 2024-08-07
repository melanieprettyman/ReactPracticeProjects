import React, {useState} from "react";
import {AppBar, Box, Button, Container, IconButton, Stack, TextField, Toolbar, Typography} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from '@mui/icons-material/Delete';
import {useAppContext} from "../../Store/Context";
import {useNavigate} from "react-router-dom";
import styles from './styles';
import FlowChart from "./Playground/FlowChart";

const NewPartPage: React.FC = () => {
    const [title, setTitle] = useState('');
    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };
    const { publishData } = useAppContext();

    const navigate = useNavigate();

    // Function to handle back navigation
    const handlePreview = () => {
        navigate("/preview-new-part");
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={styles.appBar}>
                <Toolbar sx={styles.toolBar}>
                    <IconButton onClick={handleBack}>
                        <ArrowBackIcon sx={styles.backArrow}/>
                    </IconButton>

                    <Typography variant='h4' sx={{color: 'black', paddingRight:1}}>
                        Part 1:
                    </Typography>
                    <TextField
                            id="standard-basic"
                            variant="standard"
                            value={title}
                            onChange={handleTitleChange}
                            sx={styles.titleInputField}
                            placeholder="Enter Part 1 Title"
                        />

                    <Box sx={{flexGrow: 1}}/>

                    <Box sx={styles.btnContainer}>
                        <Stack direction="row" spacing={1}>
                            <Button variant="contained" onClick={publishData}>Publish</Button>
                            <Button variant="contained">Draft</Button>
                            <Button variant="contained" onClick={handlePreview}>Preview</Button>
                            <IconButton>
                                <DeleteIcon/>
                            </IconButton>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container maxWidth={false} sx={styles.pageContainer}>
                <Stack >
                    <FlowChart/>
                </Stack>
            </Container>

        </Box>
    );
};

export default NewPartPage;
