import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function RecipeGrid({recipes}) {
  return (
      <div>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {recipes.map((recipe) => (
              <Grid item key={recipe.title} xs={12} sm={6} md={4} lg={3}>
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
                      {recipe.category}
                    </Typography>
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