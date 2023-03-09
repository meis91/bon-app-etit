import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchAndFilter/SearchBar";
import RecipeGrid from "./RecipeGrid";
import axios from "../../../api/axios"
import {ALL_RECIPE_URL, SEARCH_RECIPE_URL} from "../../../constants"

function IndexPage() {
    const[recipes, setRecipes] = useState(null)
    const popularSearchTerms = ['Pasta', 'Vegan', 'Quick Dinner', 'Cocktail'];
    const filterOptions = [
        { 'filter' : 'Dish Type',
            'options' : ['Breakfast',
                'Lunch',
                'Dinner'
            ]},
        {  'filter' : 'Recipe Type',
            'options' : ['Quick',
                'Easy',
                'Healthy',
                'Low Budget'
            ],
        },
        {  'filter' : 'Nutrition Type',
            'options' : ['Vegetarian',
                'Vegan',
                'Gluten-free',
                'Dairy-free'
            ]},
        {  'filter' : 'Season/Special',
            'options' : ['Spring',
                'Summer',
                'Autumn',
                'Winter',
                'Christmas',
                'Easter'
            ]},
        {  'filter' : 'Bakery',
            'options' : ['Cookies',
                'Cakes',
                'Bread',
                'Ice Cream'
            ]},
        {  'filter' : 'Country',
            'options' : ['Juice/Lemonade',
                'Smoothies',
                'Cocktails',
                'Winter Drinks'
            ]},
    ];

    const handleSearch = async (event) => {
        const params = new URLSearchParams([['searchTerm', event.target.value]]);
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

    useEffect(() => {
        getAllRecipes()
    }, []);
    if (!recipes) return null;

    return (
        <>
            <SearchBar popularSearchTerms={popularSearchTerms}
                       filterOptions={filterOptions}
                       recipes={recipes}
                       handleSearch={handleSearch}
            />
            {!recipes ?"No Recipes" : <RecipeGrid recipes={recipes} /> }
        </>
    );
}

export default IndexPage;