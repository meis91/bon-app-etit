import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import SingleGrid from "./SearchAndFilter/SingleGrid";
import Ingredient from "../RecepieForm/Ingredients/Ingredient";
import {useEffect, useState} from "react";
import axios from "axios";

export default function RecipeGrid({recipes, image}) {
    const [state, setState] = useState(recipes);

    function createImageUrl(){
        recipes.map((oneRecipe) => {

        })
    }



    return (
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {state.map((recipe) => (
              <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    src={recipe.image}
                    alt={recipe.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {recipe.title}
                    </Typography>
                    <Typography>
                      {recipe.description}
                    </Typography>
                      {!recipe.image ? "No Image" : <img src={recipe.image.data}/>}
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