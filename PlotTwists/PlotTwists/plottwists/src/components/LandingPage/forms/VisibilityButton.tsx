import React from "react";
import {IconButton} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {VisibilityProps} from "./Types/types";

const VisibilityButton: React.FC<VisibilityProps> = ({handleClick, show}) => {
    return (
        <IconButton onClick={handleClick} aria-label="Show">
            {!show ? <VisibilityOffIcon/> : <VisibilityIcon/>}
        </IconButton>
    );
};
export default VisibilityButton;