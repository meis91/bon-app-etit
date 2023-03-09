import {useContext, useState} from 'react';
import {Badge, Box, IconButton} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {AccountCircle} from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useNavigate} from "react-router-dom";
import UserMenu from "./UserMenu";
import {UserContext} from "../../context/UserContext";

const NavbarUser = () => {
    const LOGIN_FORM_URL = "/login";

    const navigate = useNavigate();


    const user = useContext(UserContext);


    /*useEffect(() => {
        let username = sessionStorage.getItem("username")
        if (username) {
            setUser(username)
        }
    }, [user]);*/

    const handleLoginNav = () => {
        console.log();
        navigate(LOGIN_FORM_URL)
    }

    const [anchorEl, setAnchorEl] = useState(null);


    const isMenuOpen = Boolean(anchorEl);


    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };



    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const menuId = 'primary-search-account-menu';

    return (
        <div>
            <Box sx={{flexGrow: 1}}/>
            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                {user
                    ?   <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit">
                            <Badge badgeContent={0} color="error">
                                {!user === null ? <AddCircleIcon/> : null}
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
                     <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle/>
                    </IconButton>
                <UserMenu menuId={menuId} isMenuOpen={isMenuOpen} anchorEl={anchorEl} handleMenuClose={handleMenuClose}/>
            </Box>
        </div>
    );
};

export default NavbarUser;
