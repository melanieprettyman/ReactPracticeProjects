import React from "react";
import {TextField} from "@mui/material";

export type InputProps = {
    id: string,
    label: string,
    type: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    autoFocus?: boolean,
    placeholder?: string
};

const FormInput: React.FC<InputProps> = ({ id, label, type, value, setValue, autoFocus = false, placeholder }) => (
    <TextField
        placeholder={placeholder}
        variant="outlined"
        autoFocus={autoFocus}
        required
        margin="dense"
        id={id}
        name={id}
        label={label}
        type={type}
        fullWidth
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        InputLabelProps={{ shrink: true }}
    />
);

export default FormInput;