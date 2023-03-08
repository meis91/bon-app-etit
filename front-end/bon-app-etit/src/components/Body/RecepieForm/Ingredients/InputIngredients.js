import React, {useState} from 'react';
import {Box} from "@mui/material";
import FormSubtitle from "../../../ReusableComponents/FormSubtitle";
import ButtonAdd from "../../../ReusableComponents/ButtonAdd";
import ButtonRemove from "../../../ReusableComponents/ButtonRemove";
import Ingredient from "./Ingredient";

function InputIngredients({recipe, setRecipe}) {
    const[quantities, setQuantities] = useState(
        { ingredient: {name:""},
                    quantity:0,
                    unit:"g"});

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
        return ingredientBars;
    }

    return (
        <div>
            <FormSubtitle text="Ingredients"/>
            <Box>
                {ingredientInputBar()}
                <ButtonAdd action={addBar}/>
                <ButtonRemove action={removeBar}/>
            </Box>
        </div>
    );
}

export default InputIngredients;
