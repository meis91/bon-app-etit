import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchAndFilter/SearchBar";
import RecipeGrid from "./RecipeGrid";
import axios from "../../../api/axios";

function IndexPage({baseUrl}) {
    const[recipes, setRecipes] = useState(null)
    const[tags, setTags] = useState(null)
    const TAGS_URL = "/tags"
    const popularSearchTerms = ['Pasta', 'Vegetarian', 'Cheese', 'Beef'];

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
    console.log(tags);
    console.log(filterOptions);

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