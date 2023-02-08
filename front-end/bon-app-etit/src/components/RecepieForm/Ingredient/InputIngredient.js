import React, {useState} from 'react';
import {Box} from "@mui/material";
import SelectUnitAndQuantity from "./SelectUnitAndQuantity";
import InputTextMiddle from "./InputTextMiddle";
import FormSubtitle from "../../FormSubtitle";
import Stack from "@mui/material/Stack";
import ButtonAdd from "../../ButtonAdd";
import ButtonRemove from "../../ButtonRemove";
import Ingredient from "./ingredient";


function InputIngredient({ingredients, handelIngredients}) {
    /*const[ingredients, setIngredients] = useState([
        {
            id:1,
            name:"",
            amount:0,
            unit:"g"
        },
        {
            id:2,
            name:"",
            amount:0,
            unit:"g"
        },
        {
            id:3,
            name:"",
            amount:0,
            unit:"g"
        }
    ]);*/
    const [formBars, setFormBars] = useState(1)


    const addBar = () =>{
        setFormBars(formBars + 1);
    }

    const removeBar = () =>{
        setFormBars(formBars - 1);
    }



    const ingredientInputBar = () => {
       let ingredientBars =[];
       ingredients.map((ingredient) => {
           ingredientBars.push(
               <Ingredient key={ingredient.id} id={ingredient.id} ingredients={ingredients} handleIngredients={handelIngredients}/>
           )
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

export default InputIngredient;
