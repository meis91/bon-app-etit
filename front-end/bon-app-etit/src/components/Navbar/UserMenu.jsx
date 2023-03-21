import React, {useContext} from 'react';
import MenuItem from '@mui/material/MenuItem';
import {Menu} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/UserContext";



function UserMenu({anchorEl, menuId, isMenuOpen, handleMenuClose}) {
    const LOGIN_FORM_URL = "/login";
    const REGISTRATION_FORM_URL = "/registration";
    const ADD_RECIPE_FORM_URL = "/add-recipe";
    const USER_PROFILE_URL = "/user-profile";
    const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext);

    /*const user = useContext(UserContext);*/
    const navigateToLogin = () => {
        handleMenuClose();
        navigate(LOGIN_FORM_URL)
    }
    const navigateToRegistration = () => {
        handleMenuClose();
        navigate(REGISTRATION_FORM_URL)
    }
    const navigateToAddRecipe = () => {
        handleMenuClose();
        navigate(ADD_RECIPE_FORM_URL)
    }

    const navigateToUserProfile = () => {
        handleMenuClose();
        navigate(USER_PROFILE_URL)
    }
    function handleLogout() {
        console.log(user)
        setUser(null)
        sessionStorage.clear()
    }

    return (
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
            {!user
                ? <div>
                    <MenuItem onClick={navigateToLogin}>Login</MenuItem>
                    <MenuItem onClick={navigateToRegistration}>Registration</MenuItem>
                </div>
                : <div>
                    <MenuItem onClick={navigateToUserProfile}>Profile</MenuItem>
                    <MenuItem onClick={navigateToAddRecipe}>Add Recipe</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>

                </div>
            }


        </Menu>
    );
}

export default UserMenu;
