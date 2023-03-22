import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import RecipeCard from "./RecipeCard";


export default function RecipeGrid({recipes, setUserLikes}) {

    return (
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {recipes.map((recipe) => (
              <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
                <RecipeCard recipe={recipe} setUserLikes={setUserLikes} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
  );
}
