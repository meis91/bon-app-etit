import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchAndFilter/SearchBar";
import RecipeGrid from "./RecipeGrid";
import axios from "../../../api/axios";

function IndexPage({baseUrl, tags}) {
    const[recipes, setRecipes] = useState(null)


    const popularSearchTerms = ['Pasta', 'Vegetarian', 'Cheese', 'Beef'];

    const recipeUrl = "/recipes";

    const handleSearch = (e) => {
        let searchTerm = e.target.getAttribute("data-value")
        if (searchTerm === null) {
            searchTerm = e.target.value
        }
        const params = new URLSearchParams([['searchTerm', searchTerm]]);
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
    }, []);

    if (!recipes) return null;


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