import {useEffect, useState} from 'react';
import {Badge, Box, IconButton, Menu, MenuItem, Typography} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {AccountCircle} from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useNavigate} from "react-router-dom";

const NavbarUser = ({ handleAddRecipe}) => {
    const LOGIN_URL = "/login"
    const menuId = 'primary-search-account-menu';
    const navigate = useNavigate();

    const [user, setUser] = useState("");

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

    useEffect(() => {
        let username = sessionStorage.getItem("username")
        if (username) {
            setUser(username)
        }
    }, []);

    const handleLoginNav = () => {
        navigate(LOGIN_URL)
    }

    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <div>
            <Box sx={{flexGrow: 1}}/>
            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                {sessionStorage.getItem("loggedIn") === "true"
                    ?   <IconButton
                            onClick={(e) => handleAddRecipe(e)}
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit">
                            <Badge badgeContent={0} color="error">
                                <AddCircleIcon/>
                            </Badge>
                        </IconButton>
                    :   null}

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
                {user
                    ? <MenuItem color="secondary" >
                        <Typography style={{color: "#c78f46"}} textAlign="center"> {user} </Typography>
                    </MenuItem>
                    : <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleLoginNav}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>}
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
