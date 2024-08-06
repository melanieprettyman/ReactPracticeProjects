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
import {ChangePasswordFormProps, ChangePasswordFormValues} from "./Types/types";
import styles from "./styles";
import {
    validatePasswordComplexity,
    validatePasswordsMatch,
} from "../../LandingPage/forms/Utils/utils";
import VisibilityButton from "../../LandingPage/forms/VisibilityButton";



const ChangePassword: React.FC<ChangePasswordFormProps> = ({open, handleClose}) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const {
        control,
        handleSubmit,
        formState: {errors},
        watch,
        reset
    } = useForm<ChangePasswordFormValues>({
        defaultValues: {
            password: '',
            confirmPassword: '',
        }
    });

    const onSubmit = (data: ChangePasswordFormValues) => {
        console.log(data);
        reset();
        handleClose();
    };

    const onClose = () => {
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
            <DialogTitle sx={styles.title}><b>Change Password</b></DialogTitle>
            <DialogContent sx={styles.changePasswordContent}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack sx={styles.changePasswordStack}>
                        <Stack spacing={4} sx={styles.changePasswordContainer}>
                            <Controller
                                name="password"
                                control={control}
                                rules={{required: 'Password is required.', validate: validatePasswordComplexity}}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Old Password"
                                        type={showPassword ? 'text' : 'password'}
                                        error={!!errors.password}
                                        helperText={errors.password ? errors.password.message : ''}
                                        fullWidth
                                        InputLabelProps={{shrink: true}}
                                        InputProps={{
                                            endAdornment: (
                                                <VisibilityButton
                                                    handleClick={handleClickShowPassword}
                                                    show={showPassword}/>
                                            ),
                                        }}
                                    />
                                )}
                            />
                            <Controller
                                name="password"
                                control={control}
                                rules={{required: 'Password is required.', validate: validatePasswordComplexity}}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="New Password"
                                        type={showPassword ? 'text' : 'password'}
                                        error={!!errors.password}
                                        helperText={errors.password ? errors.password.message : ''}
                                        fullWidth
                                        InputLabelProps={{shrink: true}}
                                        InputProps={{
                                            endAdornment: (
                                                <VisibilityButton
                                                    handleClick={handleClickShowPassword}
                                                    show={showPassword}/>
                                            ),
                                        }}
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
                                        type={showPassword ? 'text' : 'password'}
                                        error={!!errors.confirmPassword}
                                        helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
                                        fullWidth
                                        InputLabelProps={{shrink: true}}
                                        InputProps={{
                                            endAdornment: (
                                                <VisibilityButton
                                                handleClick={handleClickShowConfirmPassword}
                                                show={showConfirmPassword}
                                                />
                                            ),
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                        <Button type="submit" variant="contained" fullWidth sx={styles.button}>
                            Save
                        </Button>
                    </Stack>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ChangePassword;
