import React, {useState} from 'react';
import {Box} from "@mui/material";
import FormSubtitle from "../../FormSubtitle";
import ButtonAdd from "../../ButtonAdd";
import ButtonRemove from "../../ButtonRemove";
import Ingredient from "./Ingredient";


function InputIngredients({recipe, setRecipe}) {
    const[ingredient, setIngredient] = useState(
        {
            name:"",
            amount:0,
            unit:"g"
        }
    );

    const [formBars, setFormBars] = useState(1)

    const addBar = () =>{
        setRecipe({
            ...recipe,
            [recipe.ingredients]: recipe.ingredients.push(ingredient)
        })
    }

    const removeBar = () =>{
        setRecipe({
            ...recipe,
            [recipe.ingredients]: recipe.ingredients.pop()
        })
    }

    const ingredientInputBar = () => {
       let ingredientBars =[];
        for(let i = 0; i < recipe.ingredients.length; i++){
            ingredientBars.push(
                <Ingredient key={i} id={i} recipe={recipe} setRecipe={setRecipe} />
            )
        }
        recipe.ingredients.map((ingredient) => {
       })
        return ingredientBars;
    }

    return (
        <div>
            <FormSubtitle text="Ingredients"/>
            <Box
                sx={{display: 'flex', flexWrap: 'wrap'}}
            >
                {ingredientInputBar()}
                <ButtonAdd action={addBar}/>
                <ButtonRemove action={removeBar}/>
            </Box>
        </div>
    );
}

export default InputIngredients;
