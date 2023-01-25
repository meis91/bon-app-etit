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

const InputTextIngredient = ({measurement})=> {
    return (
        <div>

                <FormControl sx={{m: 1, width: '100ch'}} variant="outlined">
                    <InputLabel htmlFor="outlined-ingredient">Ingredient</InputLabel>
                    <OutlinedInput
                        id="outlined-ingredient"
                        startAdornment={<InputAdornment position="start">{measurement}</InputAdornment>}
                        label="Ingredient"
                    />
                </FormControl>

        </div>
    );
};

InputTextIngredient.propTypes = {

};

export default InputTextIngredient;
