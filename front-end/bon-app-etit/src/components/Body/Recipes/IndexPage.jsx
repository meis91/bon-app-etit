import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchAndFilter/SearchBar";
import RecipeGrid from "./RecipeGrid";
import axios from "../../../api/axios"

function IndexPage({baseUrl}) {
    const[recipes, setRecipes] = useState(null)
    const popularSearchTerms = ['Pasta', 'Vegan', 'Quick Dinner', 'Cocktail'];
    const RECIPES_URL = "/recipes";
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
        let searchUrl = `/recipes-by-searchterm?${params}`
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
                RECIPES_URL,
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
                       filterOptions={filterOptions}
                       recipes={recipes}
                       handleSearch={handleSearch}
            />
            {!recipes ?"No Recipes" : <RecipeGrid recipes={recipes} /> }
        </>
    );
}

export default IndexPage;