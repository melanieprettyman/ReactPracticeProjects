import React from "react";
import {Box, IconButton, Typography} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import styles from "./styles/styles";
/**
 * `CompareToggle` is a component that displays a toggle control for selecting or deselecting a compareItem.
 * The toggle visually changes based on whether the item is selected or not and provides a clickable area to change this state.
 *
 * Props:
 * - `isSelected`: Boolean indicating whether the item is currently selected.
 * - `toggleSelection`: Function to be called when the toggle is clicked. This function handle the change
 *   of selection state in PokemonItem.
 *
 * The component displays a label ("Selected" or "Select") and an icon indicating the current state, which changes
 * from a plus icon (for deselection) to a checkmark (for selection) when the item is selected.
 *
 * Example usage:
 * <CompareToggle isSelected={isSelected} toggleSelection={toggleSelection} />
 *
 * Components used:
 * - `Box`: Serves as the container for the toggle, providing structure and styling.
 * - `Typography`: Displays the text indicating the action (select/deselect).
 * - `IconButton`: Provides an interactive element with an icon that reflects the selection state.
 *
 * The color of the icon and the text changes based on the `isSelected` prop, enhancing user feedback and interaction.
 */
type SelectionToggleProps = {
    isSelected: boolean,
    toggleSelection: () => void;
};
const CompareToggle: React.FC<SelectionToggleProps> = ({isSelected, toggleSelection}) => {
    return (
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