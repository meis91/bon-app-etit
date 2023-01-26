import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MainBar from "./MainBar";
import PostNewRecipe from "./RecepieForm/PostNewRecipe";
import RecipeGrid from "./RecipeGrid";

function BaseContainer({popularSearchTerms, filterOptions, recipes}) {
    return (

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl"
                           sx={{
                               bgcolor: '#f6f6f6',
                               pt: 8,
                               pb: 6,
                           }}
                >
                    <MainBar popularSearchTerms={popularSearchTerms}
                             filterOptions={filterOptions}
                    />
                    <RecipeGrid recipes={recipes} />
                    <PostNewRecipe/>
                </Container>
            </React.Fragment>

    );
}

export default BaseContainer;