import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle, IconButton, PaperProps, Stack,
    TextField
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

type LandingFormProps = {
    open: boolean,
    handleClose: () => void
}
const LoginForm: React.FC<LandingFormProps> = ({open, handleClose}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries((formData as any).entries());
                    const email = formJson.email;
                    const password = formJson.password;
                    console.log(email, password);
                    setEmail('');
                    setPassword('')
                    handleClose();
                },
            }}
        >
            <DialogActions>
                <IconButton aria-label="delete" onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
            </DialogActions>
            <DialogTitle>Login</DialogTitle>
            <DialogContent sx={{height: 300, width: 400}}>
                <Stack spacing={3}>
                    <TextField
                        variant="outlined"
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        name="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <TextField
                        variant="outlined"
                        autoFocus
                        required
                        margin="dense"
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPassword(event.target.value);
                        }}
                    />
                    <DialogActions >
                        <Button type="submit" variant="contained" fullWidth>Log in</Button>
                    </DialogActions>
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default LoginForm;