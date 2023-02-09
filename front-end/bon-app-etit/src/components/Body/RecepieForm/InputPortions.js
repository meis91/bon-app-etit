import React from 'react';
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormSubtitle from "../../ReusableComponents/FormSubtitle";
import {FormGroup, FormHelperText, FormLabel, Typography} from "@mui/material";

function InputPortions({portions, handleInput}) {
    return (
        <div align="left">
            <Typography variant="subtitle1" sx={{fontWeight: 'bold'}}>Portions:</Typography>
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
