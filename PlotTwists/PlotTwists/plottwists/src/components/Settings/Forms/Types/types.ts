export type ChangePasswordFormProps = {
    open: boolean,
    handleClose: () => void;
};

export type ChangePasswordFormValues = {
    password: string;
    confirmPassword: string
};

export type ChangeUsernameFormProps = {
    open: boolean,
    handleClose: () => void,
}
export type ChangeUsernameFormValues = {
    username: string;
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

export type VisibilityProps = {
    handleClick: () => void,
    show: boolean
}