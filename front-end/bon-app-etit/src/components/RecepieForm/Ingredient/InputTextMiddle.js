import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from "prop-types";


const InputTextMiddle = ({label, placeholder, minWidth, title, handleInputTitle})=> {

    return (
        <div>
            <TextField
                onChange={(e) => handleInputTitle(e.target.value)}
                value={title}
                label={label}
                id="outlined-start"
                placeholder={placeholder}
                sx={{ m: 1, width: '1500ch',  minWidth:{minWidth} }}
            />
        </div>
    );
};

InputTextMiddle.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string
};

export default InputTextMiddle;
