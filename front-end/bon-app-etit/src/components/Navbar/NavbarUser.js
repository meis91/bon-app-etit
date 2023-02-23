import {useState} from 'react';
import {Badge, Box, IconButton, Menu, MenuItem} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {AccountCircle} from "@mui/icons-material";
import ButtonAdd from "../ReusableComponents/ButtonAdd";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useNavigate} from "react-router-dom";

const NavbarUser = ({addRecipe, handleAddRecipe}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
    const URL_LOGIN = "/login"
    const navigate = useNavigate();
    const navigationUrl = "/login"
    const handleLoginNav = () => {
        navigate(navigationUrl)
    }

    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <div>
            <Box sx={{flexGrow: 1}}/>
            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                {sessionStorage.getItem("loggedIn") === "true" ?
                    <IconButton onClick={(e) => handleAddRecipe(e)} size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={0} color="error">
                            <AddCircleIcon/>
                        </Badge>
                    </IconButton> :
                    null }

                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={0} color="error">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={0} color="error">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleLoginNav}
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
            </Box>
            <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={mobileMenuId}
                    aria-haspopup="true"

                    color="inherit"
                >

                </IconButton>
            </Box>

</div>
    );
};

export default NavbarUser;
