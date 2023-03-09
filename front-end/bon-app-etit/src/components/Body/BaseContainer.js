import React, {useEffect, useState} from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import PostNewRecipe from "./RecepieForm/PostNewRecipe";
import IndexPage from "./Recipes/IndexPage";
import axios from "../../api/axios";

function BaseContainer({addRecipe, handleAddRecipe}) {
    const[tags, setTags] = useState(null)
    const TAGS_URL = "/tags"

    useEffect(() => {
        axios.get(TAGS_URL).then((response) => {
            setTags(response.data);
        })
    }, []);

    if (!tags) return null;

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
                    {!addRecipe ? <IndexPage tags={tags}/> : <PostNewRecipe handleAddRecipe={handleAddRecipe} tags={tags}/>}
                </Container>
            </React.Fragment>

    );
}

export default BaseContainer;