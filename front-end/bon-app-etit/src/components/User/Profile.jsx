import React, {useContext, useEffect, useState} from 'react';
import axios from "../../api/axios";
import { SEARCH_USER_URL} from "../../constants";
import {Typography} from "@mui/material";
import {UserContext} from "../../context/UserContext";
import RecipeGrid from "../Body/Recipes/RecipeGrid";

const Profile = () => {
    const [recipes, setRecipes] = useState(null);
    const [userLikes, setUserLikes] = useState(0);
    const user = useContext(UserContext);
    const userName = user.user;
    function calculateLikes (recipesResponse) {
       let likes = 0;
        recipesResponse.map((recipe) => (
           likes += recipe.likes
        ))
        setUserLikes(likes);
    }

    const loginRequest = async () => {
        try {
            let userId = sessionStorage.getItem("userId")
            const params = new URLSearchParams([['id', userId]]);
            let searchUrl = `${SEARCH_USER_URL}?${params}`;
            const config = {
                headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
            };
            let response = await axios.get(searchUrl, config);
            calculateLikes(response.data);
            setRecipes(response.data);
        } catch (error){
            console.log(error);
        }
    }


    useEffect(() => {
        loginRequest()
    }, []);


    if (!recipes) return null;

    return (
        <>
            <div align="center" >
                <Typography gutterBottom variant="h3" > {userName} 's Profile</Typography>
            </div>
            <div>
                <Typography gutterBottom variant="h5"> You got {userLikes} likes </Typography>
            </div>
            {!recipes ?"No Recipes" : <RecipeGrid recipes={recipes} /> }
        </>

    );
};

export default Profile;
