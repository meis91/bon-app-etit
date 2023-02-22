import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import * as React from "react";
export default function Recipe() {
    const location = useLocation();
    const quantities = location.state.quantities
    const image = location.state.image
    console.log(location.state.id)
    console.log(quantities)
    console.log(image)
    return (
        <div>
            <Typography>
            <h1> {location.state.title} </h1>
            <div>description: {location.state.description}</div>
            <div>portions: {location.state.portions}</div>
            <div>instructions: {location.state.instructions}</div>
            </Typography>
            {quantities.map((quantity) => (
                <Typography>
                    {quantity.quantity} &nbsp;
                    {quantity.unit} &nbsp;
                    {quantity.ingredient.name}
                </Typography>
            ))}
            <img className="recipe-detail-image"
                src={location.state.image ? "data:image/jpg;base64, " + location.state.image.data : null }
                alt={location.state.imageName ? location.state.imageName : "No image"}
            />
        </div>
    )
}

