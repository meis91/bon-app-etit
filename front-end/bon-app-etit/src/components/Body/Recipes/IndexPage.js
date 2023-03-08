import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchAndFilter/SearchBar";
import RecipeGrid from "./RecipeGrid";
import axios from "../../../api/axios"

function IndexPage({baseUrl}) {
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

    const recipeUrl = "/recipes";

    const handleSearch = (e) => {
        const params = new URLSearchParams([['ingredient', e.target.value]]);
        axios
            .get(`/recipes-by-ingredient?${params}`)
            .then(function (response) {
                /*console.log(response.data);*/
                setRecipes(response.data);
            });
    }


    useEffect(() => {
        axios.get(recipeUrl).then((response) => {
            setRecipes(response.data);
        });
    }, []);
    /*console.log(recipes)*/

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