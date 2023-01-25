import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const InputTextAmount = ({measurement}) => {
    return (
        <div>
            <TextField
                label="With normal TextField"
                id="outlined-start-adornment"
                sx={{ m: 1, width: '15ch' }}
                InputProps={{
                    startAdornment: <InputAdornment position="start">{measurement}</InputAdornment>,
                }}
            />

        </div>
    );
};

InputTextAmount.propTypes = {

};

export default InputTextAmount;
