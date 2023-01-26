import React from 'react';
import {Typography} from "@mui/material";

function FormSubtitle({text}) {
    return (
       <>
           <Typography variant="h5" align="left" color="textSecondary" paragraph>
               {text}
           </Typography>
       </>
    );
}

export default FormSubtitle;