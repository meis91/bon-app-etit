import React from 'react';
import InputIngredient from "./Ingredient/InputIngredient";
import InputInstructions from "./Instractions/InputInstructions";
import {Box} from "@mui/material";
import FormControl from "@mui/material/FormControl";

function PostNewRecipe(props) {

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
                    <InputIngredient/>
                    <InputInstructions/>
                </FormControl>
            </Box>
        </div>
    );
}

export default PostNewRecipe;