export type SignupFormProps = {
    open: boolean,
    handleClose: () => void;
};

export type SignupFormValues = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    dob: string;
};

export type LoginFormProps = {
    open: boolean,
    handleClose: () => void,
    handleClickOpenForgotPassword: () => void,
}
export type LoginFormValues = {
    email: string;
    password: string;
};

export type ForgotPasswordFormProps = {
    open: boolean,
    handleClose: () => void,
    handleCloseLogin: () => void,
}
export type ForgotPasswordFormValues = {
    email: string;
};