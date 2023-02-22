import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CardActions from "@mui/material/CardActions";

function SingleGrid({recipe}) {
    return (
        <div>
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
        </div>
    );
}

export default SingleGrid;