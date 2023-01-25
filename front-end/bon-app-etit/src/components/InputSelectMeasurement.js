import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const amount = [
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
        value: 'piece(s)',
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

const InputSelectMeasurement = props => {
    return (

        <div>
            <TextField sx={{ m: 1, width: '15ch' }}
                id="outlined-select-measurement"
                select
                label="Measurement"
                defaultValue="g"
            >
                {amount.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </div>
        /*</Box>*/
    );
};

InputSelectMeasurement.propTypes = {

};

export default InputSelectMeasurement;
