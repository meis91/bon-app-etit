import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchAndFilter/SearchBar";
import RecipeGrid from "./RecipeGrid";
import axios from "../../../api/axios";
import {ALL_RECIPE_URL, SEARCH_RECIPE_URL} from "../../../constants";

function IndexPage({tags}) {
    const[recipes, setRecipes] = useState(null)
    const popularSearchTerms = ['Pasta', 'Vegetarian', 'Cheese', 'Beef'];

    const handleSearch = async (event) => {
        let searchTerm = event.target.getAttribute("data-value")
        if (searchTerm === null) {
            searchTerm = event.target.value
        }
        const params = new URLSearchParams([['searchTerm', searchTerm]]);
        let searchUrl = `${SEARCH_RECIPE_URL}?${params}`
        try {
            let response = await axios.get(
                searchUrl,
            )
            setRecipes(response.data)
        } catch (error){
            console.log(error)
        }
    }


    useEffect(() => {
        getAllRecipes()
    }, []);
    const getAllRecipes = async () => {
        try {
            let response = await axios.get(
                ALL_RECIPE_URL,
            )
            setRecipes(response.data)
        } catch (error) {
            console.log(error)
        }
    }
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