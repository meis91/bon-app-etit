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
    const RECIPE_POST_URL = "http://localhost:8000/api";
    axios.defaults.headers.get['header-name'] = 'value'
    console.log(axios.defaults.headers)

    const [recipe, setRecipe] = useState({
        title:"",
        description:"",
        ingredients:[],
        instructions:""
    });

    const handleInput = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value,
        })
    }

    const handleIngredients = (ingredient) =>{
        setRecipe({
            ...recipe,
            [recipe.ingredients]: recipe.ingredients.push(ingredient)
        })
    }

    async function postRecipe(e) {
        e.preventDefault()
        console.log("Sub")
        /*try {
            const url = RECIPE_POST_URL;
            const data = recipe
            const response = await axios.post(url, data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }*/
        let formdata = new FormData
        formdata.append("recipe", recipe)
        axios.post(RECIPE_POST_URL, {
            body: formdata,
        })
            .then((response) => {
                console.log(response);
            });
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