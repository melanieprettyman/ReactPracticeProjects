//TODO: Validate user credentials in BE

import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, IconButton, Stack,
    TextField
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Controller, useForm} from "react-hook-form";
import styles from "./Styles/styles";
import {LoginFormProps, LoginFormValues} from "./Types/types";

const LoginForm: React.FC<LoginFormProps> = ({open, handleClose, handleClickOpenForgotPassword}) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const {
        control,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<LoginFormValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = (data: LoginFormValues) => {
        console.log(data);
        reset();
        handleClose();
    };

    const onClose = () => {
        reset();
        handleClose();
    };
    const handleOpenForgotForm = () => {
        handleClose();
        handleClickOpenForgotPassword();
    };

    const VisibilityBtn = () => {
        return (
            <IconButton
                onClick={handleClickShowPassword}
                aria-label="Show"
            >
                {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
            </IconButton>
        );
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogActions>
                <IconButton aria-label="delete" onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            </DialogActions>
            <DialogTitle sx={styles.title}>Login</DialogTitle>
            <DialogContent sx={styles.loginContent}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4} sx={styles.loginStack}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{required: 'Email is required'}}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="Username or E-mail"
                                    type="text"
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email.message : ''}
                                    fullWidth
                                    InputLabelProps={{shrink: true}}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={{required: 'Password is required'}}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="Password"
                                    type={!showPassword ? 'text' : 'password'}
                                    error={!!errors.password}
                                    helperText={errors.password ? errors.password.message : ''}
                                    fullWidth
                                    InputLabelProps={{shrink: true}}
                                    InputProps={{
                                        endAdornment: (<VisibilityBtn />),
                                    }}

                                />
                            )}
                        />
                        <DialogActions>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth sx={styles.button}
                            >
                                Log in
                            </Button>
                        </DialogActions>
                        <Button
                            variant="text"
                            sx={styles.forgotPasswordBtn}
                            onClick={handleOpenForgotForm}
                        >
                            Forgot password?
                        </Button>
                    </Stack>
                </form>

            </DialogContent>
        </Dialog>
    );
};

export default LoginForm;