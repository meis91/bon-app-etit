import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
