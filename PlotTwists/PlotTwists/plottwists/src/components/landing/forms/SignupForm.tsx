//TODO: Validate uniqueness
import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, IconButton, Stack,
    TextField
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {useForm, Controller} from "react-hook-form";
import {
    validateAge,
    validateEmail,
    validatePasswordComplexity,
    validatePasswordsMatch,
    validateUsername
} from "./Utils/utils";
import styles from "./Styles/styles";
import {SignupFormProps, SignupFormValues} from "./Types/types";


const SignupForm: React.FC<SignupFormProps> = ({open, handleClose}) => {
    const {
        control,
        handleSubmit,
        formState: {errors},
        watch,
        reset
    } = useForm<SignupFormValues>({
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            dob: ''
        }
    });

    const onSubmit = (data: SignupFormValues) => {
        console.log(data);
        reset();
        handleClose();
    };

    const onClose = ()=>{
        reset();
        handleClose();
    };

    const password = watch("password");


    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogActions>
                <IconButton aria-label="close" onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            </DialogActions>
            <DialogTitle sx={styles.title}><b>Sign up</b></DialogTitle>
            <DialogContent sx={styles.signupContent}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack sx={styles.signupStack}>
                        <Stack spacing={4} sx={styles.signupContainer}>
                        <Controller
                            name="username"
                            control={control}
                            rules={{required: 'Username is required', validate: validateUsername}}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="Username"
                                    type="text"
                                    error={!!errors.username}
                                    helperText={errors.username ? errors.username.message : ''}
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                />
                            )}
                        />
                        <Controller
                            name="email"
                            control={control}
                            rules={{required: 'Email is required', validate: validateEmail}}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="E-mail"
                                    type="email"
                                    error={!!errors.email}
                                    helperText={errors.email ? errors.email.message : ''}
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                />
                            )}
                        />
                        <Controller
                            name="password"
                            control={control}
                            rules={{required: 'Password is required', validate: validatePasswordComplexity}}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="New Password"
                                    type="password"
                                    error={!!errors.password}
                                    helperText={errors.password ? errors.password.message : ''}
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                />
                            )}
                        />
                        <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{
                                required: 'Confirm Password is required',
                                validate: (value) => validatePasswordsMatch(password, value)
                            }}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="Confirm Password"
                                    type="password"
                                    error={!!errors.confirmPassword}
                                    helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                />
                            )}
                        />
                        <Controller
                            name="dob"
                            control={control}
                            rules={{required: 'Date of Birth is required', validate: validateAge}}
                            render={({field}) => (
                                <TextField
                                    {...field}
                                    label="Date of Birth"
                                    type="date"
                                    InputLabelProps={{shrink: true}}
                                    error={!!errors.dob}
                                    helperText={errors.dob ? errors.dob.message : ''}
                                    fullWidth
                                />
                            )}
                        />
                            </Stack>
                        <Button type="submit" variant="contained" fullWidth sx={styles.button}>
                            Sign up
                        </Button>
                    </Stack>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default SignupForm;
