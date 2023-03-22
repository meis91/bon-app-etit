import FavoriteIcon from '@mui/icons-material/Favorite';
import * as React from "react";
import IconButton from '@mui/material/IconButton';
import axios from "../../../api/axios";
import {UPDATE_RECIPE_LIKES_URL} from "../../../constants";

export default function RecipeLike({recipeId, recipe, setRecipe}) {
    async function handleLike() {
        console.log(UPDATE_RECIPE_LIKES_URL)
        const url = UPDATE_RECIPE_LIKES_URL.replace("id", recipeId);
        console.log(url)
        try{
            let responseRecipe = (await axios.put(
                url)).data;
            setRecipe({
                ...recipe,
                likes: responseRecipe.likes,
            })
            setRecipe(responseRecipe);
        } catch (err){
            console.log(err);
        }
    }

    return (
        <>
                <div style={{display: 'inline-block', verticalAlign: 'middle'}}>
                    <IconButton aria-label="like" size="large" onClick={handleLike}>
                        <FavoriteIcon color="error" />
                    </IconButton>
                    {recipe.likes}
                </div>
        </>
    )
}

