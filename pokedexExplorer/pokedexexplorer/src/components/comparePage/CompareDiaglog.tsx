import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ComparisonItem from "./ComparisonItem";
import {Box, Stack} from "@mui/material";
import styles from "./styles/styles";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  open: boolean,
  handleClose: () => void;
}
const FullScreenDialog:React.FC<Props>= ({open,handleClose }) => {

  return (
    <React.Fragment>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
            <ArrowBackIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Back
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={styles.header}>
          <Typography variant='h4'> Compare Favorite Pokemon </Typography>
        </Box>
        <Stack
            direction="row"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{paddingTop:'20px'}}
        >
          <ComparisonItem />
          <ComparisonItem />
          <ComparisonItem />
          <ComparisonItem />
          <ComparisonItem />
        </Stack>
      </Dialog>
    </React.Fragment>
  );
}

export default FullScreenDialog;