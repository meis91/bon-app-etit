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

export default function RecipeGrid({recipes}) {

    return (
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {recipes.map((recipe) => (
              <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
                <RecipeCard recipe={recipe} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
  );
}
