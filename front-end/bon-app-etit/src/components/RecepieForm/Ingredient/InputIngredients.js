import React, {useState} from 'react';
import {Box} from "@mui/material";
import FormSubtitle from "../../FormSubtitle";
import ButtonAdd from "../../ButtonAdd";
import ButtonRemove from "../../ButtonRemove";
import Ingredient from "./Ingredient";


function InputIngredients({recipe, setRecipe}) {
    const[quantities, setQuantities] = useState(
        { ingredient: {name:""},
                    quantity:0,
                    unit:"g"});

    const [formBars, setFormBars] = useState(1)

    const addBar = () =>{
        setRecipe({
            ...recipe,
            [recipe.quantities]: recipe.quantities.push(quantities)
        })
    }

    const removeBar = () =>{
        setRecipe({
            ...recipe,
            [recipe.quantities]: recipe.quantities.pop()
        })
    }

    const ingredientInputBar = () => {
       let ingredientBars =[];
        for(let i = 0; i < recipe.quantities.length; i++){
            ingredientBars.push(
                <Ingredient key={i} id={i} recipe={recipe} setRecipe={setRecipe} />
            )
        }
        recipe.quantities.map((ingredient) => {
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
