import React, {useState} from "react";
import Navbar from "../navbar/Navbar";
import {Button, Container, Paper, Stack, TextField, Typography} from "@mui/material";
import LoginForm from "../landing/forms/LoginForm";
import {Controller, useForm} from "react-hook-form";
import {validateAge} from "../landing/forms/Utils/utils";
import {SignupFormValues} from "../landing/forms/Types/types";

const Settings: React.FC = () => {
    const {
        control,
        formState: {errors},
    } = useForm<SignupFormValues>({
        defaultValues: {
            dob: ''
        }
    });
    const [open, setOpen] = useState(true);
    const [openSignup, setOpenSignup] = useState(false);
    const [openForgotPassword, setForgotPassword] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpenSignup = () => {
        setOpenSignup(true);
    };

    const handleCloseSignup = () => {
        setOpenSignup(false);
    };

    const handleClickOpenForgotPassword = () => {
        setForgotPassword(true);
    };

    const handleCloseForgotPassword = () => {
        setForgotPassword(false);
    };

    return (
        <>
            <Navbar/>
            <Container sx={{mt: 4, width: '70%', maxHeight: '70%'}}>
                <Typography variant={'h4'} sx={{fontWeight: 'bold', paddingBottom: 2}}>Settings</Typography>
                <Paper sx={{width: '100%', height: '100%', mb: 4, minHeight: 300, padding: 2}} variant="outlined">
                    <Stack spacing={2} >
                        <Stack direction={'row'} spacing={1} alignItems="center">
                            <Typography sx={{paddingLeft:50, paddingRight:5}}>Username</Typography>
                            <Typography>@username</Typography>
                            <Button>Change username</Button>
                        </Stack>

                        <Stack direction={'row'} spacing={1} alignItems="center">
                            <Typography sx={{paddingLeft:50, paddingRight:5}}>Password</Typography>
                            <Button>Change password</Button>
                        </Stack>

                        <Stack direction={'row'} spacing={1} alignItems="center">
                            <Typography sx={{paddingLeft:54, paddingRight:6}}>Email</Typography>
                            <Typography>email@email.com</Typography>
                            <Button>Change email</Button>
                        </Stack>

                        <Stack direction={'row'} spacing={1} alignItems="center">
                            <Typography sx={{paddingLeft:48, paddingRight:5}}>Date of birth</Typography>
                             <Controller
                                name="dob"
                                control={control}
                                rules={{required: 'Date of Birth is required.', validate: validateAge}}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        type="date"
                                        InputLabelProps={{shrink: true}}
                                        error={!!errors.dob}
                                        helperText={errors.dob ? errors.dob.message : ''}
                                    />
                                )}
                            />
                        </Stack>

                        <Stack direction="row" justifyContent="center" sx={{width: '100%', paddingTop:2}}>
                            <Button variant='contained' sx={{width: 75}}>Submit</Button>
                        </Stack>
                    </Stack>
                </Paper>
                <Button sx={{color: 'red', fontWeight: 'bold'}}>Close account</Button>
            </Container>
            <LoginForm open={open} handleClose={handleClose} handleClickOpenForgotPassword={handleClickOpenForgotPassword} />
        </>
    )
}
export default Settings;
