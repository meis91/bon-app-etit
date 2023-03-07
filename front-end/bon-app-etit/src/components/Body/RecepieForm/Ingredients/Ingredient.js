import React, {useState} from 'react';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";

const Ingredient = ({id, recipe, setRecipe}) => {
    const [unit, setUnit] = useState("g");
    const units = [
        {
            value: 'g',
            label: 'Gram',
        },
        {
            value: 'kg',
            label: 'Kilogram',
        },
        {
            value: 'tsp',
            label: 'Teaspoon',
        },
        {
            value: 'tbsp',
            label: 'Tablespoon',
        },
        {
            value: 'piece',
            label: 'Piece',
        },
        {
            value: 'c',
            label: 'Cup',
        },
        {
            value: 'ml',
            label: 'Milliliter',
        },
        {
            value: 'cl',
            label: 'Centiliter',
        },
        {
            value: 'l',
            label: 'Liter',
        },

    ];

    const  handleInputName = (e) =>  {
        let newQuantity = {
                name: ""
        }
        newQuantity.name = e.target.value

        const updatedQuantities = recipe.quantities.map((quantitiesElement, index) => index === id ? {
            ...quantitiesElement,
            ingredient: newQuantity,
        } : quantitiesElement)

        const updatedRecipe = {
            ...recipe,
            quantities: updatedQuantities
        }
        setRecipe(updatedRecipe)
    }

    const  handleInput = (e) =>  {
        if(e.target.name === "unit"){
            setUnit(e.target.value)
        }
        const updatedQuantities = recipe.quantities.map((quantities, index) => index === id ? {
            ...quantities,
            [e.target.name]: e.target.value
        } : quantities)
        const updatedRecipe = {
            ...recipe,
            quantities: updatedQuantities
        }
        setRecipe(updatedRecipe)
    }

    return (
        <div className="input-ingredient" key={id}>
            <Stack
                direction={{xs: 'column', sm: 'row'}}
                spacing={{xs: 1, sm: 2, md: 4}}
            >

                <TextField sx={{m: 1, maxWidth: 150}}
                           id="outlined-select-measurement"
                           name="unit"
                           select
                           label="Unit"
                           defaultValue="g"
                           onChange={(e) => handleInput(e)}
                >
                    {units.map((unit) => (
                        <MenuItem key={unit.value} value={unit.value}>
                            {unit.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    onChange={(e) => handleInput(e)}
                    id="outlined-start-adornment"
                    name="quantity"
                    type="number"
                    label="Amount"
                    placeholder="Amount"
                    sx={{m: 1, maxWidth: 150, minWidth: 50, width: 50}}
                    inputProps={{min:0}}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{unit}</InputAdornment>
                    }}
                />
                <TextField
                    onChange={(e) => handleInputName(e)}
                    label="Ingredient"
                    name="name"
                    id="outlined-start"
                    placeholder="Name of the Ingredient"
                    sx={{m: 1, width: '1500ch', minWidth: "400px"}}
                />
            </Stack>
        </div>
    );
};

export default Ingredient;
