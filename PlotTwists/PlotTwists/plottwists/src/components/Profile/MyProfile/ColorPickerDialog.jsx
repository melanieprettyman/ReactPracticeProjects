import {Dialog, DialogTitle, IconButton, Box, Grid} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const ColorPickerDialog = ({ open, onClose, onColorSelect }) => {
    const colors = [
        '#ffffff',
         'linear-gradient(102.2deg, rgb(250, 45, 66) 9.6%, rgb(245, 104, 104) 96.1%)',//red
        'radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)', //orange
        'linear-gradient(109.6deg, rgb(255, 219, 47) 11.2%, rgb(244, 253, 0) 100.2%)', //yellow
        'linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)', // green
        'radial-gradient(circle at 10% 20%, rgba(91, 173, 254, 0.46) 0%, rgba(91, 224, 254, 0.46) 47.2%, rgba(170, 254, 235, 0.43) 90%)', //Blue
        'radial-gradient(circle at 10% 20%, rgb(236, 158, 248) 0%, rgb(131, 83, 241) 90.1%)', // purple
        'linear-gradient(109.6deg, rgb(253, 223, 168) 11.2%, rgb(246, 165, 254) 100.2%)', // pink
         'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898',
        'linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)', // pink-purple
        'linear-gradient(90deg, #C37B89, #FFC898, #FCFFA6, #BFD8B8, #BFD8B8, #CEE5D0,#F0D9FF)', //rainbow
        'linear-gradient(103.3deg, rgb(190, 11, 215) -18.7%, rgb(246, 234, 11) 90.9%)', //pink-yellow



    ];

    return (
        <Dialog onClose={onClose} open={open} sx={{}}>
            <DialogTitle sx={{textAlign:'center'}}>Choose Background Color</DialogTitle>
            <Box sx={{color:'white', p: 3}}>
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ justifyContent: 'center', maxWidth:400 }}>
                {colors.map((color, index) => (
                    <Grid item xs={2} key={index}>
                        <Box sx={{
                            width: 48, // Adjust size to fit 6 per row, considering padding/margins
                            height: 48,
                            background: color,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            '&:hover': { cursor: 'pointer', opacity: 0.8 },
                            border: '1px solid rgba(0,0,0,0.2)'
                        }}
                        onClick={() => onColorSelect(color === 'none' ? '' : color)}
                        />
                    </Grid>
                ))}
            </Grid>
                </Box>
        </Dialog>
    );
};
export default ColorPickerDialog;