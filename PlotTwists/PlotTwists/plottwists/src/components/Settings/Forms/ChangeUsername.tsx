//TODO: Check BE for valid username and correct password

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
import {ChangeUsernameFormProps, ChangeUsernameFormValues} from "./Types/types";
import styles from "./styles";
import {
    validatePasswordComplexity, validateUsername,
} from "../../LandingPage/forms/Utils/utils";
import VisibilityButton from "../../LandingPage/forms/VisibilityButton";



const ChangeUsername: React.FC<ChangeUsernameFormProps> = ({open, handleClose}) => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const {
        control,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<ChangeUsernameFormValues>({
        defaultValues: {
            username:'',
            password: '',
        }
    });

    const onSubmit = (data: ChangeUsernameFormValues) => {
        console.log(data);
        reset();
        handleClose();
    };

    const onClose = () => {
        reset();
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogActions>
                <IconButton aria-label="close" onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            </DialogActions>
            <DialogTitle sx={styles.title}><b>Change Username</b></DialogTitle>
            <DialogContent sx={styles.changePasswordContent}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack sx={styles.changePasswordStack}>
                        <Stack spacing={4} sx={styles.changePasswordContainer}>
                            <Controller
                                name="username"
                                control={control}
                                rules={{required: 'Username is required.', validate: validateUsername}}
                                render={({field}) => (
                                    <TextField
                                        {...field}
                                        label="Username"
                                        type="text"
                                        error={!!errors.username}
                                        helperText={errors.username ? errors.username.message : ''}
                                        fullWidth
                                        InputLabelProps={{shrink: true}}
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
                                        label="Confirm Password"
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

export default ChangeUsername;
