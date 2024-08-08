import { Dialog, DialogTitle, IconButton, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ColorPickerDialog = ({ open, onClose, onColorSelect }) => {
    const colors = [
        '#ffffff',
        'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)', // pink-purple
        'radial-gradient(circle at 10% 20%, rgb(236, 158, 248) 0%, rgb(131, 83, 241) 90.1%)', // purple
        'linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)', // green
        'radial-gradient(circle at 10% 20%, rgba(91, 173, 254, 0.46) 0%, rgba(91, 224, 254, 0.46) 47.2%, rgba(170, 254, 235, 0.43) 90%)', // Deep Blue
        'linear-gradient(109.6deg, rgb(253, 223, 168) 11.2%, rgb(246, 165, 254) 100.2%)', // yellow-pink
        'linear-gradient(90deg, #C37B89, #FFC898, #FCFFA6, #BFD8B8, #BFD8B8, #CEE5D0,#F0D9FF)'
    ];

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle sx={{textAlign:'center'}}>Choose Background Color</DialogTitle>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 2 }}>
                {colors.map((color) => (
                    <Box key={color} sx={{
                        width: 36, height: 36, background: color,
                        margin: 1, borderRadius: '50%',
                        '&:hover': { cursor: 'pointer', opacity: 0.8 },
                        border:'1px solid rgba(0, 0, 0, 0.5)',

                    }}

                    onClick={() => onColorSelect(color)}
                    />
                ))}
            </Box>
        </Dialog>
    );
};
export default ColorPickerDialog;