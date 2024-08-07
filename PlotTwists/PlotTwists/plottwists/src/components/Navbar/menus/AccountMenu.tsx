import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import {AccountCircle} from "@mui/icons-material";
import styles from "../styles";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import {Button, Chip} from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useNavigate} from "react-router-dom";
import menuStyles from './styles';

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let navigate = useNavigate();

     const navigateToProfile = () => {
        navigate(`/user`);
    };

     const navigateToLibrary = () => {
        navigate(`/library`);
    };

      const navigateToSettings = () => {
        navigate(`/settings`);
    };

      const navigateToNotifications = () =>{
          navigate('/notifications');
      }

    return (
        <React.Fragment>
            <Box sx={menuStyles.dialogue}>
                <Tooltip title="Account settings">
                    <Button
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        color="primary"
                        sx={styles.tabs}
                    >
                        <AccountCircle sx={menuStyles.fallbackAvatar}/>
                        Username
                        <ArrowDropDownIcon sx={{ fontSize: 40}}/>
                    </Button>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        width: 200,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 100,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'center', vertical: 'top'}}
                anchorOrigin={{horizontal: 'center', vertical: 'bottom'}}
            >
                <MenuItem onClick={navigateToProfile}>
                    Profile
                </MenuItem>
                <Divider/>

                <MenuItem onClick={navigateToLibrary}>
                    <ListItemIcon>
                        <LocalLibraryIcon fontSize="small"/>
                    </ListItemIcon>
                    My Library
                </MenuItem>
                <MenuItem onClick={navigateToSettings}>
                    <ListItemIcon>
                        <Settings fontSize="small"/>
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={navigateToNotifications}>
                    <ListItemIcon>
                        <Chip size="small" label="1" color="primary"/>
                    </ListItemIcon>
                    Notifications
                </MenuItem>
                <Divider/>

                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small"/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}