import React from "react";
import {IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
/**
 * `FavoriteToggle` is a component that provides a toggle button for favorite functionality.
 * It displays either a filled or outlined favorite icon based on the `isSelected` state.
 *
 * Props:
 * - `isSelected`: Boolean indicating if the item is currently marked as a favorite.
 * - `toggleSelection`: Function to invoke when the toggle button is clicked, lifted up to PokemonItem.
 *
 * Example usage:
 * <FavoriteToggle
 *   isSelected={isFavorited}
 *   toggleSelection={handleFavoriteToggle}
 * />
 */
type SelectionToggleProps = {
    isSelected: boolean,
    toggleSelection: () => void;
};
const FavoriteToggle: React.FC<SelectionToggleProps> = ({isSelected, toggleSelection}) => {
    return (
        <div style={{position: 'absolute', right: 0, top: 0,}}>
            <IconButton
                onClick={toggleSelection}
                style={{color: isSelected ? 'red' : 'gray'}}
                aria-label="add to favorites"
            >
                {isSelected ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </IconButton>
        </div>
    );
}
export default FavoriteToggle;

