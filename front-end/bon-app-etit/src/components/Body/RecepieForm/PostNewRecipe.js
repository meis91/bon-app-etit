import React, {useState} from 'react';
import InputIngredients from "./Ingredients/InputIngredients";
import InputInstructions from "./InputInstructions";
import {Box} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputTitle from "./InputTitle";
import FormTitle from "../../ReusableComponents/FormTitle";
import InputDescription from "./InputDescription";
import ButtonUploadPicture from "../../ReusableComponents/ButtonUploadPicture";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import axios from "axios";
import Stack from "@mui/material/Stack";
import InputPortions from "./InputPortions";


function PostNewRecipe({handleAddRecipe}) {
    const RECIPE_POST_URL = "http://localhost:8000/api/recipes";
    const RECIPE_IMAGE_POST_URL = "http://localhost:8000/api/recipes/image";

    const [image, setImage] = useState("");
    const [recipe, setRecipe] = useState({
        title:"",
        imageName:"",
        description:"",
        portions: 4,
        quantities:[],
        instructions:"",
    });

    const handleInput = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value,
        })
    }

    const handleInputPicture = (e) => {
        e.preventDefault();
        setRecipe({
            ...recipe,
            imageName: e.target.files[0].name,
        })
        setImage(e.target.files[0]);
    }

    async function postRecipe(e) {
        e.preventDefault()
        let resultRecipe = await axios.post(          // any call like get
            RECIPE_POST_URL,recipe);
        let formData = new FormData();
        formData.append("file", image);
        let resultFile = await axios.post(          // any call like get
            RECIPE_IMAGE_POST_URL,         // your URL
            formData);
        handleAddRecipe();
    }

    return (
        <div align="center" >
            <Box
                container="true"
                maxWidth="lg"
                component="form"type="file"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch',  },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl onSubmit={(e) =>postRecipe(e)}>
                    <FormTitle text="Add a new Recipe"/>
                    <InputTitle title={recipe.title} handleInput={handleInput}/>
                    <ButtonUploadPicture handleInputPicture={handleInputPicture}/>
                    <InputDescription description={recipe.description} handleInput={handleInput} />
                    <InputPortions portions={recipe.portions} handleInput={handleInput}/>
                    <InputIngredients recipe={recipe} setRecipe={setRecipe}/>
                    <InputInstructions instructions={recipe.instructions} handleInput={handleInput} />
                    <Stack direction="row" spacing={6}>
                        <Button onClick={postRecipe}  type="submit" variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Stack>
                </FormControl>
            </Box>
        </div>
    );
}

export default PostNewRecipe;