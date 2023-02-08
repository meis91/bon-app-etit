import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from "@mui/material/InputAdornment";


const SelectUnitAndQuantity = ({amount, addUnit, addAmount}) => {

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

    return (
        <div>
            <TextField sx={{ m: 1, maxWidth: 150 }}
                id="outlined-select-measurement"
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
                onChange={(e) => addAmount(e.target.value)}
                type="number"
                label="Amount"
                id="outlined-start-adornment"
                placeholder="Amount"
                value={amount.value}
                sx={{ m: 1, maxWidth: 150, minWidth: 50, width: 50  }}
                InputProps={{
                    endAdornment: <InputAdornment position="end">{unit}</InputAdornment>
                }}
            />
        </div>
    );
};

SelectUnitAndQuantity.propTypes = {

};

export default SelectUnitAndQuantity;
