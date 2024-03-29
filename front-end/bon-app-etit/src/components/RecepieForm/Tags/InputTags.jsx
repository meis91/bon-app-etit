import FormSubtitle from "../../ReusableComponents/FormSubtitle";
import {Box} from "@mui/material";
import React, {useState} from "react";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function InputTags({ tags, recipe, setRecipe }) {
    const [checked, setChecked] = React.useState(false);
    const [state, setState] = React.useState(null);
    const [selected, setSelected] = useState([])

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
        let newSelected;
        if (selected.some(recipeTag => recipeTag.name === event.target.name)) {
            newSelected = selected.filter(recipeTag => recipeTag.name !== event.target.name)
        } else {
            newSelected = [...selected, {"name" : event.target.name}]
        }
        setSelected(newSelected)
        setRecipe({
            ...recipe,
            "tags": newSelected
        })
    };

    return (
        <div>
            <FormSubtitle text="Tags"/>
            <Box sx={{ display: 'flex' }}>
                {tags.map((category) => (
                <FormControl key={category.tagCategoryName} sx={{ m: 1 }} component="fieldset" variant="standard">
                    <FormLabel key={category.tagCategoryName} component="legend">{category.tagCategoryName}</FormLabel>
                                {category.tags.map((option) => (
                                    <FormGroup key={option.name}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox onChange={handleChange} name={option.name} />
                                                }
                                                label={option.name}
                                            />
                                    </FormGroup>
                                ))}
                </FormControl>
                ))}
            </Box>
        </div>
    )
}