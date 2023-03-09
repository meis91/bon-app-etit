import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchAndFilter/SearchBar";
import RecipeGrid from "./RecipeGrid";
import axios from "../../../api/axios";

function IndexPage({baseUrl}) {
    const[recipes, setRecipes] = useState(null)
    const[tags, setTags] = useState(null)
    const TAGS_URL = "/tags"
    const popularSearchTerms = ['Pasta', 'Vegetarian', 'Cheese', 'Beef'];

    const recipeUrl = "/recipes";

    const handleSearch = (e) => {
        const params = new URLSearchParams([['searchTerm', e.target.value]]);
        axios
            .get(`/recipes-by-searchterm?${params}`)
            .then(function (response) {
                setRecipes(response.data);
            });
    }


    useEffect(() => {
        axios.get(recipeUrl).then((response) => {
            setRecipes(response.data);
        });
        axios.get(TAGS_URL).then((response) => {
            setTags(response.data);
        })
    }, []);

    if (!recipes) return null;
    if (!tags) return null;

    return (
        <>
            <SearchBar popularSearchTerms={popularSearchTerms}
                       filterOptions={tags}
                       recipes={recipes}
                       handleSearch={handleSearch}
            />
            {!recipes ?"No Recipes" : <RecipeGrid recipes={recipes} /> }
        </>
    );
}

export default IndexPage;