import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import {createSearchParams, useNavigate} from "react-router-dom";
import SingleGrid from "./SearchAndFilter/SingleGrid";
import Ingredient from "../../RecepieForm/Ingredients/Ingredient";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function RecipeGrid({recipes, image}) {

    const navigate = useNavigate();
    const showRecipe = (recipe) => {
        const navigationUrl = "/recipe/" + recipe.id
        console.log(recipe.id);
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
                userId: recipe.userId
            }
        });
    }


    return (
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {recipes.map((recipe) => (
              <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
                <Card onClick={() => showRecipe(recipe)} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    src={recipe.image ? "data:image/jpg;base64, " + recipe.image.data : null }
                    alt={recipe.image ? recipe.title : "No image"}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {recipe.title}
                    </Typography>
                    <Typography>
                      {recipe.description}
                    </Typography>
                     {/* {recipe.image ? <img src={createImageUrl(recipe.image)}/> : null }*/}
                  </CardContent>
                  <CardActions>
                    <FavoriteOutlinedIcon color="error" />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
  );
}
