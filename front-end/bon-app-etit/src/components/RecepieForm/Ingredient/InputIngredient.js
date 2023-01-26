import React, {useEffect, useState} from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import SelectUnitAndQuantity from "./SelectUnitAndQuantity";
import InputTextMiddle from "./InputTextMiddle";
import FormSubtitle from "../../FormSubtitle";
import Stack from "@mui/material/Stack";
import ButtonAdd from "../../ButtonAdd";
import ButtonRemove from "../../ButtonRemove";


function InputIngredient() {
    const [amount, setAmount] = useState(3)

    const addBar = () =>{
        setAmount(amount + 1);
    }

    const removeBar = () =>{
        setAmount(amount - 1);
    }

    const ingredientInputBar = () => {
       let ingredientBars =[];
        for(let i = 0; i < amount; i++){
            let id = "ingredient-bar-" + i.toString();
            ingredientBars.push(
                <div className="input-ingredient" key={id}>
                    <Stack
                        direction={{xs: 'column', sm: 'row'}}
                        spacing={{xs: 1, sm: 2, md: 4}}
                    >
                        <SelectUnitAndQuantity/>
                        <InputTextMiddle label="Ingredient" placeholder="Name of the Ingredient"/>
                    </Stack>
                </div>
            )
        }
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
