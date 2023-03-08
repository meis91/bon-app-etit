import React from 'react';
import {Alert} from "@mui/material";

function AlertSuccess({message}) {
    return (
        <div>
            <Alert severity="success">{message}</Alert>
        </div>
    );
}

export default AlertSuccess;