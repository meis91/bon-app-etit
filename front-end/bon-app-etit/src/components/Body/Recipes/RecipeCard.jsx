import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import RecipeLike from "./RecipeLike";
import Card from "@mui/material/Card";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

export default function RecipeCard({recipe}) {
    const [cardRecipe, setCardRecipe] = useState(recipe);

    const navigate = useNavigate();
    const showRecipe = (recipe) => {
        const navigationUrl = "/recipe/" + recipe.id
        navigate(navigationUrl, {
            state: {
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                portions: recipe.portions,
                instructions: recipe.instructions,
                quantities: recipe.quantities,
                imageName: recipe.imageName,
                image: recipe.image,
                tags: recipe.tags,
                likes: recipe.likes,
                user: recipe.user
            }
        });
    }

    return (
        <>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                    onClick={() => showRecipe(cardRecipe)}
                    component="img"
                    src={recipe.image ? "data:image/jpg;base64, " + recipe.image.data : null }
                    alt={recipe.image ? recipe.title : "No image"}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography onClick={() => showRecipe(cardRecipe)} gutterBottom variant="h5" component="h2">
                        {recipe.title}
                    </Typography>
                    <Typography onClick={() => showRecipe(cardRecipe)}>
                        {recipe.description}
                    </Typography>
                </CardContent>
                <RecipeLike recipeId={recipe.id} recipe={cardRecipe} setRecipe={setCardRecipe} />
            </Card>
        </>
    )
}
