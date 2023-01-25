import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


function CategoryFilter({ filterOption }) {
  const options = filterOption.options;

    return (

        <div>
            <TextField sx={{ m: 1, width: '20ch' }}
                id="outlined-select-measurement"
                select
                label={filterOption.filter}
                defaultValue=''
            >
                {options.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>
        </div>
        /*</Box>*/
    );
};

CategoryFilter.propTypes = {

};

export default CategoryFilter;