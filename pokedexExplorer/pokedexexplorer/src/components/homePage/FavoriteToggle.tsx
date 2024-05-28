import React from "react";
import {IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type SelectionToggleProps = {
    isSelected: boolean,
    toggleSelection: () => void;
};
const FavoriteToggle: React.FC<SelectionToggleProps> = ({isSelected, toggleSelection}) => {
    return(
        <div style={{position: 'absolute', right: 0, top: 0,}}>
             <IconButton
                onClick={toggleSelection}
                style={{ color: isSelected ? 'red' : 'gray'}}
                aria-label="add to favorites"
            >
              {isSelected ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
        </IconButton>
        </div>
    );
}
export default FavoriteToggle;

