import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Stack from "@mui/material/Stack";
import SelectUnitAndQuantity from "./SelectUnitAndQuantity";
import InputTextMiddle from "./InputTextMiddle";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";

const Ingredient = ({id, ingredients, handleIngredients}) => {
    const INGR = {
        name:"",
        amount:0,
        unit:"g"
    };
    const [ingr,setIngr] = useState({...INGR});
    const [unit, setUnit] = useState("g");
    const units= [
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

    const [ingredient, setIngredient] = useState({
            id: id,
            name:"",
            amount:"",
            unit:unit
        });

    /*const handleInput = (e) => {
        console.log(e)
        setIngredient({
            ...ingredient,
            [e.target.name]: e.target.value,
        })

        let copyOfIngredients = ingredients;
        //console.log(copyOfIngredients)
        for(let i = 0; i < copyOfIngredients.size; i++){
            if(copyOfIngredients[i].id === id){
                copyOfIngredients[i] = ingredient;
            } else {
                copyOfIngredients.push(ingredient);
            }
        }
        //console.log(copyOfIngredients)
        addIngredient(copyOfIngredients)

    }*/


    return (
        <div className="input-ingredient" key={id} id={id}>
            <Stack
                direction={{xs: 'column', sm: 'row'}}
                spacing={{xs: 1, sm: 2, md: 4}}
            >

                    <TextField sx={{ m: 1, maxWidth: 150 }}
                               id="outlined-select-measurement"
                               name="unit"
                               select
                               label="Unit"
                               defaultValue="g"
                               onChange={(e) => setUnit(e.target.value) }
                    >
                        {units.map((unit) => (
                            <MenuItem  key={unit.value} value={unit.value}>
                                {unit.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        onChange={(e) => handleIngredients(e)}
                        id="outlined-start-adornment"
                        name="amount"
                        type="number"
                        label="Amount"
                        placeholder="Amount"
                        value={ingredient.amount.value}
                        sx={{ m: 1, maxWidth: 150, minWidth: 50, width: 50  }}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">{unit}</InputAdornment>
                        }}
                    />
                    <TextField
                        onChange={(e) => handleIngredients(e)}
                        label="Ingredient"
                        name="name"
                        id="outlined-start"
                        placeholder="Name of the Ingredient"
                        value={ingredient.name.value}
                        sx={{ m: 1, width: '1500ch',  minWidth:"370px" }}
                    />

                {/*<SelectUnitAndQuantity amount={amount} addUnit={addUnit} addAmount={addAmount}/>
                <InputTextMiddle  label="Ingredient" placeholder="Name of the Ingredient" minWidth="370px"/>*/}
            </Stack>
        </div>
    );
};

Ingredient.propTypes = {

};

export default Ingredient;
