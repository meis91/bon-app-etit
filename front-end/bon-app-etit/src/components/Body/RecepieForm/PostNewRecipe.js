import React, {useState} from 'react';
import InputIngredients from "./Ingredients/InputIngredients";
import InputInstructions from "./InputInstructions";
import {Alert, Box} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputTitle from "./InputTitle";
import FormTitle from "../../ReusableComponents/FormTitle";
import InputDescription from "./InputDescription";
import InputTags from "./Tags/InputTags";
import ButtonUploadPicture from "../../ReusableComponents/ButtonUploadPicture";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import axios from "../../../api/axios"
import Stack from "@mui/material/Stack";
import InputPortions from "./InputPortions";
import {DropzoneArea} from "mui-file-dropzone";
import DropZone from "./DropZone";



function PostNewRecipe({handleAddRecipe, tags}) {
    const RECIPE_POST_URL = "/recipes";
    const RECIPE_IMAGE_POST_URL = "/recipes/image";

    const [success, setSuccess] = useState(false);
    const [image, setImage] = useState("");
    const [imgPreview, setImagePreview] = useState("");
    const [recipe, setRecipe] = useState({
        title:"",
        description:"",
        portions: 4,
        quantities:[],
        instructions:"",
        tags:[],
    });

    const handleInput = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value,
        })
    }

    const handleInputPicture = (e) => {
        setImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    async function postRecipe(e) {
        console.log(recipe)
        e.preventDefault()
        try{
            let resultRecipe = await axios.post(
                RECIPE_POST_URL, recipe);
            let formData = new FormData();
            formData.append("file", image);
            formData.append("recipe_id", resultRecipe.data.id)
            if(image){
                let resultFile = await axios.post(
                    RECIPE_IMAGE_POST_URL,
                    formData);
            }
            setTimeout(alertFunc, 1000);
        } catch (err){
            console.log(err);
        }

        function alertFunc() {
            handleAddRecipe();
        }
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
                   {/* <DropZone image={image} handleInputPicture={handleInputPicture}/>*/}

                    {/*<DropzoneArea dropzoneText="Drag & drop your image here or click" onChange={handleInputPicture}/>*/}
                    <ButtonUploadPicture image={imgPreview} handleInputPicture={handleInputPicture}/>
                    <InputDescription description={recipe.description} handleInput={handleInput} />
                    <InputPortions portions={recipe.portions} handleInput={handleInput}/>
                    <InputIngredients recipe={recipe} setRecipe={setRecipe}/>
                    <InputInstructions instructions={recipe.instructions} handleInput={handleInput} />
                    <InputTags tags={tags} recipe={recipe} setRecipe={setRecipe} />
                    <Stack style={{justifyContent: 'center'}} direction="row" spacing={{xs: 1, sm: 2, md: 4}}>
                        <Button onClick={postRecipe}  type="submit" variant="contained" endIcon={<SendIcon />}>
                            Submit
                        </Button>
                    </Stack>
                    { success ? <Alert severity="success">Upload Successfull</Alert> : null }
                </FormControl>
            </Box>
        </div>
    );
}

export default PostNewRecipe;