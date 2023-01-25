import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from "@mui/material";
import SelectUnitAndQuantity from "./SelectUnitAndQuantity";
import InputTextIngredient from "./InputTextIngredient";


InputIngredient.propTypes = {

};

function InputIngredient(props) {

    return (
        <div>
            <Typography variant="h5" align="left" color="textSecondary" paragraph>
                Ingredients
            </Typography>
            <Box
                sx={{ display: 'flex', flexWrap: 'wrap'}}
            >

                <SelectUnitAndQuantity />
                <InputTextIngredient/>
            </Box>
        </div>
    );
}

export default InputIngredient;