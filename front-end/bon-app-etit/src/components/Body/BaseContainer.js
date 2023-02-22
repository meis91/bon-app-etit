import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import PostNewRecipe from "./RecepieForm/PostNewRecipe";
import IndexPage from "./Recipes/IndexPage";

function BaseContainer({addRecipe, handleAddRecipe}) {

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