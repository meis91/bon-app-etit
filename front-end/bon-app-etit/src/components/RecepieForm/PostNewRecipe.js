import React, {useState} from 'react';
import InputIngredients from "./Ingredient/InputIngredients";
import InputInstructions from "./Instructions/InputInstructions";
import {Box} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputTitle from "./InputTitle";
import FormTitle from "../FormTitle";
import InputDescription from "./InputDescription";
import ButtonUpload from "../ButtonUpload";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import axios from "axios";
import Stack from "@mui/material/Stack";


function PostNewRecipe() {
    const RECIPE_POST_URL = "http://localhost:8000/api/recipes";
    axios.defaults.headers.get['header-name'] = 'value'


    const [recipe, setRecipe] = useState({
        title:"",
        description:"",
        portions: 4,
        quantities:[],
        instructions:""
    });


    const handleInput = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value,
        })
    }


    async function postRecipe(e) {
        e.preventDefault()

        try {
        let result = await axios.post(          // any call like get
            RECIPE_POST_URL,         // your URL
            recipe
        );
        console.log(result.response.data);
        } catch (error) {
        console.error(error.response.data);     // NOTE - use "error.response.data` (not "error")
        }

    }

    return (
        <div align="center" >
            <Box
                container="true"
                maxWidth="lg"
                component="form"type="file"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl onSubmit={(e) =>postRecipe(e)}>
                    <FormTitle text="Add a new Recipe"/>
                    <InputTitle title={recipe.title} handleInput={handleInput}/>
                    <ButtonUpload/>
                    <InputDescription description={recipe.description} handleInput={handleInput} />
                    <InputIngredients recipe={recipe} setRecipe={setRecipe}/>
                    <InputInstructions instructions={recipe.instructions} handleInput={handleInput} />
                    <Stack direction="row" spacing={2}>
                        <Button onClick={(e) =>postRecipe(e)} type="submit" variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Stack>
                </FormControl>
            </Box>
        </div>
    );
}

export default PostNewRecipe;