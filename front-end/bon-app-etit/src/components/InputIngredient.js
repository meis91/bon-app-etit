import React from 'react';
import PropTypes from 'prop-types';
import {Box} from "@mui/material";
import InputSelectMeasurement from "./InputSelectMeasurement";
import InputTextIngredient from "./InputTextIngredient";
import InputTextAmount from "./InputTextAmount";

InputIngredient.propTypes = {

};

function InputIngredient(props) {
    return (
        <div>
            <Box
                sx={{ display: 'flex', flexWrap: 'wrap' }}
            >
                <InputSelectMeasurement/>
                <InputTextAmount/>
                <InputTextIngredient/>
            </Box>
        </div>
    );
}

export default InputIngredient;