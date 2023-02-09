import React from 'react';
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormSubtitle from "../FormSubtitle";

function InputPortions({portions, handleInput}) {
    return (
        <div align="left">
            <FormSubtitle text="Portions"/>
            <TextField
                onChange={(e) => handleInput(e)}
                value={portions}
                id="outlined-start-adornment"
                name="portions"
                type="number"
                sx={{m: 1, maxWidth: 70, minWidth: 40, width: 40}}
            />
        </div>
    );
}

export default InputPortions;
