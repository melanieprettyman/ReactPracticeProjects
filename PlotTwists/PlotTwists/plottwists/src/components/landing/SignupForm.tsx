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


const SignupForm: React.FC<LandingFormProps> = ({open, handleClose}) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const[dob, setDOB] = useState('');

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
                    const username = formJson.username;
                    const email = formJson.email;
                    const password = formJson.password;
                    const confirmPassword = formJson.confirmPassword;
                    const dob = formJson.dob;


                    console.log(username, email,  password, confirmPassword, dob);
                    setUsername('');
                    setEmail('');
                    setPassword('');
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    setDOB('');
                    handleClose();
                },
            }}
        >
            <DialogActions>
                <IconButton aria-label="delete" onClick={handleClose}>
                    <CloseIcon/>
                </IconButton>
            </DialogActions>
            <DialogTitle>Sign up</DialogTitle>
            <DialogContent sx={{minHeight: 500, minWidth: 400}}>
                <Stack spacing={3} sx={{paddingTop: 1}}>
                    <TextField
                        placeholder="Enter username"
                        variant="outlined"
                        autoFocus
                        required
                        margin="dense"
                        id="username"
                        name="username"
                        label="Username"
                        type="username"
                        fullWidth
                        value={username}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setUsername(event.target.value);
                        }}
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        placeholder='Enter E-mail'
                        variant="outlined"
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        name="email"
                        label="E-mail"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setEmail(event.target.value);
                        }}
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        placeholder='New Password'
                        variant="outlined"
                        autoFocus
                        required
                        margin="dense"
                        id="password"
                        name="password"
                        label="New Password"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setPassword(event.target.value);
                        }}
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        placeholder='Confirm Password'
                        variant="outlined"
                        autoFocus
                        required
                        margin="dense"
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        fullWidth
                        value={confirmPassword}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setConfirmPassword(event.target.value);
                        }}
                        InputLabelProps={{shrink: true}}
                    />
                    <TextField
                        variant="outlined"
                        autoFocus
                        required
                        margin="dense"
                        id="dob"
                        name="dob"
                        label="Date of Birth"
                        type="date"
                        fullWidth
                        value={dob}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setDOB(event.target.value);
                        }}
                        InputLabelProps={{shrink: true}}
                    />
                    <DialogActions>
                        <Button type="submit" variant="contained" fullWidth>Sign up</Button>
                    </DialogActions>
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default SignupForm;