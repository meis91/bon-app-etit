import React, {useState} from 'react';
import InputIngredient from "./Ingredient/InputIngredient";
import InputInstructions from "./Instractions/InputInstructions";
import {Box} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputTitle from "./InputTitle";
import FormTitle from "../FormTitle";

//Todo: Produce a Recipe form the Form and send Post to DB & Toggle Form
function PostNewRecipe(props) {
    const [ingredients, setIngredients] = useState([])

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl>
                    <FormTitle text="Add a new Recipe"/>
                    <InputTitle/>
                    <InputIngredient />
                    <InputInstructions/>
                </FormControl>
            </Box>
        </div>
    );
}

export default PostNewRecipe;