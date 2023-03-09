import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchField({handleSearch}) {
    const preventEnterClick = (event) =>{
        if (event.key === "Enter") {
            event.preventDefault();
        }
    }

  return (
      <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', maxwidth: 600 }}
      >
        <InputBase
            onChange={handleSearch}
            onKeyPress={preventEnterClick}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for Recipe, Ingredients, Meal type..."
            inputProps={{ 'aria-label': 'search for recipe' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
  );
}

export default SearchField;