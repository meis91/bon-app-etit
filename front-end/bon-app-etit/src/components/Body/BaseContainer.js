import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import SearchBar from "./Recipes/SearchAndFilter/SearchBar";
import PostNewRecipe from "./RecepieForm/PostNewRecipe";
import RecipeGrid from "./Recipes/RecipeGrid";
import IndexPage from "./Recipes/IndexPage";


function BaseContainer({addRecipe, handleAddRecipe, baseUrl}) {

    return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth={false}
                           sx={{
                               bgcolor: '#f6f6f6',
                               pt: 8,
                               pb: 6,
                           }}
                >
                    {!addRecipe ? <IndexPage/> : <PostNewRecipe handleAddRecipe={handleAddRecipe}/>}
                </Container>
            </React.Fragment>

    );
}

export default BaseContainer;