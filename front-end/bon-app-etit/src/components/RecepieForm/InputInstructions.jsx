import React from 'react';
import TextField from '@mui/material/TextField';
import {Typography} from "@mui/material";
import FormSubtitle from "../ReusableComponents/FormSubtitle";

InputInstructions.propTypes = {
    
};

function InputInstructions({instructions, handleInput}) {

    return (
                <div align="left">
                    <FormSubtitle text={"Instructions"}/>
                    <TextField
                        name="instructions"
                        value={instructions.replace(/↵/g, "\n")}
                        onChange={event => handleInput(event)}
                        sx={{
                            width: { sm: 0, md: 0 },
                            "& .MuiInputBase-root": {
                                height: 200,
                                width: 730
                            }
                        }}
                        label="Instructions"
                        id="outlined-instructions"
                        placeholder="Write the Step by Step Instructions in this Field"
                        multiline={true}
                        maxRows={11}
                    />
                </div>

    );
}

export default InputInstructions;