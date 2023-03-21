import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as React from "react";
import {Container} from "@mui/material";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import axios from "../../api/axios";
import {SAVE_RECIPE_IMG_URL, SAVE_RECIPE_URL, UPDATE_RECIPE_URL} from "../../constants";
import {useState} from "react";
export default function Recipe() {
    const location = useLocation();
    const quantities = location.state.quantities
    const image = location.state.image
    const tags = location.state.tags
    const likes = location.state.likes
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

    async function handleLike() {
        const newRecipe = {
            id: detailRecipe.id,
            title: detailRecipe.title,
            description: detailRecipe.description,
            portions: detailRecipe.portions,
            quantities: detailRecipe.quantities,
            imageName: location.state.imageName,
            image: location.state.image,
            instructions: detailRecipe.instructions,
            tags: detailRecipe.tags,
            likes: detailRecipe.likes + 1,
            userId: detailRecipe.userId,
        }
        try{
            let responseRecipe = (await axios.put(
                UPDATE_RECIPE_URL, newRecipe)).data;

            setDetailRecipe(responseRecipe)
        } catch (err){
            console.log(err);
        }
    }

    return (
        <div>
            <Container sx={{ py: 8 }} maxWidth="md" text>
                <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        <Typography noWrap variant="h3">
                            {detailRecipe.title}
                        </Typography>
                        <Button variant="contained" endIcon={<
                            FavoriteIcon />} onClick={handleLike}>
                            Like
                        </Button>
                    </div>
                    <div style={{display: 'flex'}}>
                        <FavoriteIcon color="error" /> <div>&nbsp;</div>
                        {detailRecipe.likes}
                    </div>


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
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

