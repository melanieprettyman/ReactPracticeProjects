//TODO: Upon successfully sending a recovery email, show success message to user
import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, IconButton, PaperProps, Stack,
    TextField, Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {Controller, useForm} from "react-hook-form";
import styles from "./Styles/styles";
import {ForgotPasswordFormProps, ForgotPasswordFormValues} from "./Types/types";

const ForgotPassword: React.FC<ForgotPasswordFormProps> = ({open, handleClose, handleCloseLogin}) => {
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<ForgotPasswordFormValues>({
        defaultValues: {
            email: '',
        }
    });

    const onSubmit = (data: ForgotPasswordFormValues) => {
        console.log(data);
        reset();
        handleClose();
    };

    const onClose = () => {
        reset();
        handleClose();
        handleCloseLogin();

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
            <DialogTitle sx={styles.title}>Lost your
                password?</DialogTitle>
            <DialogContent sx={styles.loginContent}>
                <Typography sx={styles.forgotPasswordTxt}>
                    Type your username or email below and we'll send you instructions on how to reset it.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4} sx={styles.loginStack}>
                        <Controller
                            name="email"
                            control={control}
                            rules={{required: 'Username or Email is required'}}
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
                        <DialogActions>
                            <Button type="submit" variant="contained" fullWidth sx={styles.button}>
                                Send instructions
                            </Button>
                        </DialogActions>
                    </Stack>
                </form>

            </DialogContent>
        </Dialog>
    );
};

export default ForgotPassword;