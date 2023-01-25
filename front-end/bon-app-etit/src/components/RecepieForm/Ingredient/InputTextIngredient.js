import React from 'react';
import TextField from '@mui/material/TextField';


const InputTextIngredient = ()=> {
    return (
        <div>
            <TextField
                label="Ingredient"
                id="outlined-start"
                placeholder="Write the Name of the Ingredient in this Field"
                sx={{ m: 1, width: '1500ch',  minWidth: 370 }}
            />
        </div>
    );
};

InputTextIngredient.propTypes = {

};

export default InputTextIngredient;
