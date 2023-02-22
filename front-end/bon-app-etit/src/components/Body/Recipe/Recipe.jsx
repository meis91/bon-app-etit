import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import * as React from "react";
import {Container} from "@mui/material";
export default function Recipe() {
    const location = useLocation();
    const quantities = location.state.quantities
    const image = location.state.image
    console.log(location.state.id)
    console.log(quantities)
    console.log(image)
    const ingredients = quantities.map((quantity) => (
        <li key={quantity.ingredient.name}>
                {quantity.quantity} &nbsp;
                {quantity.unit} &emsp;
                {quantity.ingredient.name}

        </li>))

    return (
        <div>
            <Container sx={{ py: 8 }} maxWidth="md" text>
                <Card  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                    <h1> {location.state.title} </h1>
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
                            <p>{location.state.description}</p>
                            <br />
                            <b>Ingredients:</b>
                            <p>Portions: {location.state.portions}</p>
                            <ul>{ingredients}</ul>
                            <br />
                            <b>Instructions:</b>
                            <p>{location.state.instructions}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

