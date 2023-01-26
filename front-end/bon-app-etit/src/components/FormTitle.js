import React from 'react';
import {Typography} from "@mui/material";
import PropTypes from "prop-types";

function FormTitle({text}) {
    return (
        <>
            <Typography variant="h3"  color="textSecondary" paragraph>
                {text}
            </Typography>
        </>
    );
}

FormTitle.propTypes = {
    text: PropTypes.string
};

export default FormTitle;