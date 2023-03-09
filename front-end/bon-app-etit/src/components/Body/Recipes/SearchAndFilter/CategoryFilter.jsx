import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


function CategoryFilter({ filterOption, handleSearch }) {
  const options = filterOption.tags;

    return (

        <div>
            <TextField sx={{ m: 1, width: '20ch' }}
                id="outlined-select-measurement"
                select
                label={filterOption.tagCategoryName}
                defaultValue=''
            >
                {options.map((option) => (
                    <MenuItem key={option.name} value={option.name} onClick={(e)=>handleSearch(e)}>
                        {option.name}
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