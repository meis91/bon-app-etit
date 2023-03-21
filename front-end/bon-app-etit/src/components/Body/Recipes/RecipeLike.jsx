import FavoriteIcon from '@mui/icons-material/Favorite';
import * as React from "react";
import IconButton from '@mui/material/IconButton';
import axios from "../../../api/axios";
import {UPDATE_RECIPE_URL} from "../../../constants";

export default function RecipeLike({recipe, setRecipe}) {
    async function handleLike() {
        console.log(recipe.user)
        const newRecipe = {
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            portions: recipe.portions,
            quantities: recipe.quantities,
            imageName: recipe.imageName,
            image: recipe.image,
            instructions: recipe.instructions,
            tags: recipe.tags,
            likes: recipe.likes + 1,
            /*user: recipe.user,*/
            userId: recipe.user.id
        }
        try{
            console.log(newRecipe);
            let responseRecipe = (await axios.put(
                UPDATE_RECIPE_URL, newRecipe)).data;
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

