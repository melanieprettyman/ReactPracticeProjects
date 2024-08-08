import {
    Box, Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Rating,
    Stack,
    Tooltip,
    Typography
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import styles from "./styles";
import {useNavigate} from "react-router-dom";

// @ts-ignore
const PartTile = ({partId, onDelete}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        onDelete(partId);
        handleClose();
    };
    let navigate = useNavigate();
    const navigateToEditStoryPart = () => {
        navigate("/edit-part");
    };
    return (
        <Box sx={{padding: 1}}>
            <Stack direction={'row'} spacing={3}>
                <Stack spacing={1}>
                    <Typography sx={styles.partContainer}>Untitled Part</Typography>

                    <Typography color="text.secondary">Updated Jul 08, 2024 11:50 AM</Typography>

                    <Stack direction="row" alignItems='center' spacing={2}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <VisibilityIcon sx={styles.icon}/>
                            <Typography variant="body2" sx={styles.subtitle}>1.8M</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Rating name="read-only" value={3.7} readOnly size="small" precision={0.5}/>
                            <Typography variant="body2" sx={styles.subtitle}>3.7</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <ModeCommentIcon sx={styles.icon}/>
                            <Typography variant="body2" sx={styles.subtitle}>36</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Box sx={{flexGrow: 1}}></Box>
                <Tooltip title="Edit Part">
                    <IconButton sx={styles.partIconBtn} onClick={navigateToEditStoryPart}>
                        <CreateIcon/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton sx={styles.partIconBtn} onClick={handleClickOpen}>
                        <DeleteIcon/>
                    </IconButton>
                </Tooltip>

            </Stack>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this part?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
export default PartTile;