import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from "prop-types";


const InputTextMiddle = ({label, placeholder})=> {
    return (
        <div>
            <TextField
                label={label}
                id="outlined-start"
                placeholder={placeholder}
                sx={{ m: 1, width: '1500ch',  minWidth: 370 }}
            />
        </div>
    );
};

InputTextMiddle.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string
};

export default InputTextMiddle;
