import React from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import {IconButton} from "@mui/material";

function ButtonRemove({action}) {
    return (
        <IconButton onClick={action} color="primary" aria-label="upload picture" component="label" >
            <RemoveCircleIcon/>
        </IconButton>
    );
}

export default ButtonRemove;