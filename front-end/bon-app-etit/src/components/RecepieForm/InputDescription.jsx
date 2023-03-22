import React from 'react';
import PropTypes from 'prop-types';
import FormSubtitle from "../ReusableComponents/FormSubtitle";
import TextField from "@mui/material/TextField";

InputDescription.propTypes = {

};

function InputDescription({description, handleInput}) {

    return (
        <div align="left">
            <FormSubtitle text={"Description"}/>
            <TextField
                name="description"
                value={description.replace(/↵/g, " \n ")}
                onChange={event => handleInput(event)}
                sx={{
                    width: { sm: 0, md: 0 },
                    "& .MuiInputBase-root": {
                        height: 100,
                        width: 730
                    }
                }}
                label="Description"
                id="outlined-instructions"
                placeholder="Please provide a short description of your recipe"
                multiline={true}
                maxRows={5}
            />
        </div>
    );
}

export default InputDescription;