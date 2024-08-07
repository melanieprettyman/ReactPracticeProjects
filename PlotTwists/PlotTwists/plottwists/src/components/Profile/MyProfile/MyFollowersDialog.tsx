import React from "react";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import {Avatar, Box, Container, Dialog, Stack} from "@mui/material";
import img from "../../PlayStory/placeholder.png";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import {useNavigate} from "react-router-dom";

//TODO: add scroll bar

export type Props = {
    open: boolean,
    handleClose: () => void,
}

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


const FollowerContainer = () => {
    let navigate = useNavigate();

    const handleNavigationToProfile = () => {
        navigate("/user");
    };
    return (
        <Stack>
            <Stack direction={'row'} spacing={1} sx={{paddingBottom: 1}}>
                <Avatar alt="Remy Sharp" src={img} sx={{width: 50, height: 50}} onClick={handleNavigationToProfile}/>
                <Stack sx={{flexGrow: 1}} onClick={handleNavigationToProfile}>
                    <Typography sx={{fontSize: 16}}>Name @username</Typography>
                    <Typography variant="caption" color="text.secondary">
                        44 followers
                    </Typography>
                </Stack>
                <Button variant={"contained"} >
                    <PersonAddIcon sx={{paddingRight: 2}}/>
                    Follow
                </Button>
            </Stack>
        </Stack>
    )
}
const MyFollowersDialog: React.FC<Props> = ({open, handleClose}) => {
    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <Box sx={{width:600, maxHeight:500}}>
                    <DialogTitle sx={{m: 0, p: 2}} id="customized-dialog-title">
                        5 Followers
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon/>
                    </IconButton>
                    <DialogContent dividers>
                        <FollowerContainer/>
                        <FollowerContainer/>
                        <FollowerContainer/>
                        <FollowerContainer/>
                        <FollowerContainer/>
                        <FollowerContainer/>
                        <FollowerContainer/>
                        <FollowerContainer/>
                    </DialogContent>
                </Box>
            </BootstrapDialog>
        </React.Fragment>
    );
}
export default MyFollowersDialog;


