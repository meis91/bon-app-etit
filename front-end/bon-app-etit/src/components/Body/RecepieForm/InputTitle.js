import React from 'react';
import FormSubtitle from "../../ReusableComponents/FormSubtitle";
import InputTextMiddle from "./Ingredients/InputTextMiddle";
import TextField from "@mui/material/TextField";

function InputTitle({title, handleInput}) {

    return (
        <div align="left">
            <FormSubtitle text="Title"/>
            <TextField
                name="title"
                value={title}
                onChange={event => handleInput(event)}
                label="Title"
                id="outlined-start"
                placeholder="Recipe Name"
                sx={{ m: 1, width: '1500ch',  minWidth:"730px" }}
            />
        </div>
    );
}

export default InputTitle;