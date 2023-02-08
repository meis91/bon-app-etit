import React from 'react';
import {IconButton} from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function ButtonAdd({action}) {
    return (
        <IconButton onClick={action} color="primary" aria-label="upload picture" component="label" >
            <AddCircleIcon/>
        </IconButton>
    );
}

export default ButtonAdd;