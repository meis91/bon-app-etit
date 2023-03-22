import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Container} from "@mui/material";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {useState} from "react";
import RecipeLike from "../Body/Recipes/RecipeLike";
export default function Recipe() {
    const location = useLocation();
    const quantities = location.state.quantities
    const tags = location.state.tags
    const ingredients = quantities.map((quantity) => (
        <tbody key={quantity.ingredient.name}>
                        <td><li>{quantity.quantity}&nbsp;</li></td>
                        <td>{quantity.unit}&emsp;</td>
                        <td>{quantity.ingredient.name}</td>
        </tbody>
    ));
    const [detailRecipe, setDetailRecipe] = useState({
        id: location.state.id,
        title: location.state.title,
        description: location.state.description,
        portions: location.state.portions,
        quantities: location.state.quantities,
        imageName: location.state.imageName,
        image: location.state.image,
        instructions: location.state.instructions,
        tags: location.state.tags,
        likes: location.state.likes,
        user: location.state.user
    });

    return (
        <div>
            <Container sx={{ py: 8 }} maxWidth="md" text>
                <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1 }} align="left">
                        <Typography variant="h3">
                            <b>{detailRecipe.title}</b>
                        </Typography>
                        <Typography variant="h5">
                            <RecipeLike recipeId={detailRecipe.id} recipe={detailRecipe} setRecipe={setDetailRecipe} />
                        </Typography>
                    </CardContent>
                    <CardMedia
                        align="center"
                        component="img"
                        src={location.state.image  ? "data:image/jpg;base64, " + location.state.image.data : null }
                        alt={location.state.imageName ? location.state.imageName : "No image"}
                        sx={{
                            flexGrow: 1,
                            mx: 20,
                            mr: 40,
                            width: 500,
                            minWidth:200,
                            maxWidth: 500
                    }}
                    />
                    <CardContent sx={{ flexGrow: 1 }} align="left">
                        <Typography variant="h6">
                            <b>Description:</b>
                            <p>{detailRecipe.description}</p>
                            <br />
                            <b>Ingredients:</b>
                            <p>&nbsp; Portions: {detailRecipe.portions}</p>
                            <table>{ingredients}</table>
                            <br />
                            <b>Instructions:</b>
                            <p>{detailRecipe.instructions}</p>
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {tags.map((tag) => (
                                <Chip key={tag.name} label={tag.name} variant="outlined" />
                            ))}
                        </Stack>
                        <Typography variant="h6">
                            <br />
                            <b>Posted by: </b> {location.state.user.username}
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

