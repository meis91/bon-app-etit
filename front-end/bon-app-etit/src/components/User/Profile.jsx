import React, {useContext, useEffect, useState} from 'react';
import axios from "../../api/axios";
import { SEARCH_USER_URL} from "../../constants";
import {Typography} from "@mui/material";
import {UserContext} from "../../context/UserContext";
import RecipeGrid from "../Body/Recipes/RecipeGrid";

const Profile = () => {
    const [recipes, setRecipes] = useState(null);
    const user = useContext(UserContext);
    const userName = user.user;
    console.log(user.user);

    useEffect(() => {
        let userId = sessionStorage.getItem("userId")
        const params = new URLSearchParams([['id', userId]]);
        let searchUrl = `${SEARCH_USER_URL}?${params}`;
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
        };
        axios.get(searchUrl, config).then((response) => {
            console.log(response.data);
            setRecipes(response.data);
        })
    }, []);

    if (!recipes) return null;

    return (
        <>
            <div align="center" >
                <Typography gutterBottom variant="h3" > {userName} 's Profile</Typography>
            </div>
            {!recipes ?"No Recipes" : <RecipeGrid recipes={recipes} /> }
        </>

    );
};

export default Profile;
