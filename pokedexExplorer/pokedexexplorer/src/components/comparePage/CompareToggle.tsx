import React from "react";
import {Box, IconButton, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import styles from "./styles/styles";

type SelectionToggleProps = {
    isSelected: boolean,
    toggleSelection: () => void;
};
const CompareToggle: React.FC<SelectionToggleProps> = ({isSelected, toggleSelection}) => {
    return(
        <Box
            sx={styles.toggle}
            onClick={toggleSelection}
          >
            <Typography variant="body2" component="span" sx={{ml: 1}}>
              {isSelected ? 'Selected' : 'Select'}
            </Typography>
            <IconButton
              sx={{color: isSelected ? 'red' : 'gray'}}
              aria-label="toggle selection"
            >
              {isSelected ? <CheckCircleIcon/> : <ControlPointIcon/>}
            </IconButton>
          </Box>
    );
}
export default CompareToggle;