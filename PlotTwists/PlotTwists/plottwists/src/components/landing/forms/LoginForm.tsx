//TODO: Validate user credentials

import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, IconButton, PaperProps, Stack,
    TextField, Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import FormInput from "./FormInput";
import {Controller, useForm} from "react-hook-form";
import {validateEmail, validatePasswordComplexity, validateUsername} from "./utils";

type LandingFormProps = {
    open: boolean,
    handleClose: () => void
}
type FormValues = {
    email: string;
    password: string;
};
const LoginForm: React.FC<LandingFormProps> = ({open, handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        control,
        handleSubmit,
        formState: {errors},
        watch,
        reset
    } = useForm<FormValues>({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
        reset();
        handleClose();
    };

    const onClose = () => {
        reset();
        handleClose();
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
            <DialogTitle sx={{textAlign: 'center', fontWeight: 'bold', fontSize: '1.3rem'}}>Login</DialogTitle>
            <DialogContent sx={{minHeight: 300, maxHeight: 300, maxWidth: 500, minWidth: 500}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4} sx={{paddingTop: 1, paddingBottom: 3}}>
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
                                    type="password"
                                    error={!!errors.password}
                                    helperText={errors.password ? errors.password.message : ''}
                                    fullWidth
                                    InputLabelProps={{shrink: true}}
                                />
                            )}
                        />
                        <DialogActions>
                            <Button type="submit" variant="contained" fullWidth sx={{fontWeight: 'bold'}}>
                                Log in
                            </Button>
                        </DialogActions>
                        <Typography sx={{fontSize: 14, textDecoration: 'underline', textAlign: 'center'}}>Forgot
                            password?</Typography>
                    </Stack>
                </form>

            </DialogContent>
        </Dialog>
    );
};

export default LoginForm;