import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MainBar from "./MainBar";
import PostNewRecipe from "./RecepieForm/PostNewRecipe";

function BaseContainer({popularSearchTerms, filterOptions}) {
    return (

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="xl">
                    <MainBar popularSearchTerms={popularSearchTerms}
                             filterOptions={filterOptions}
                    />
                    <PostNewRecipe/>
                </Container>
            </React.Fragment>

    );
}

export default BaseContainer;