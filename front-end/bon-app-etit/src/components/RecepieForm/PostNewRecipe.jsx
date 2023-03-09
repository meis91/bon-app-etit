import React, {useState} from 'react';
import InputIngredients from "./Ingredients/InputIngredients";
import InputInstructions from "./InputInstructions";
import {Alert, Box} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputTitle from "./InputTitle";
import FormTitle from "../ReusableComponents/FormTitle";
import InputDescription from "./InputDescription";
import ButtonUploadPicture from "../ReusableComponents/ButtonUploadPicture";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import axios from "../../api/axios"
import Stack from "@mui/material/Stack";
import InputPortions from "./InputPortions";
import {DropzoneArea} from "mui-file-dropzone";
import DropZone from "./DropZone";
import {SAVE_RECIPE_URL, SAVE_RECIPE_IMG_URL} from "../../constants"



function PostNewRecipe() {
    const [success, setSuccess] = useState(false);
    const [image, setImage] = useState("");
    const [imgPreview, setImagePreview] = useState("");
    const [recipe, setRecipe] = useState({
        title:"",
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
        setImage(e.target.files[0]);
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }

    async function postRecipe(e) {
        e.preventDefault()
        try{
            let resultRecipe = await axios.post(
                SAVE_RECIPE_URL, recipe);
            let formData = new FormData();
            formData.append("file", image);
            formData.append("recipe_id", resultRecipe.data.id)
            if(image){
                let resultFile = await axios.post(
                    SAVE_RECIPE_IMG_URL,
                    formData);
            }
            setSuccess(true);
           alert("Upload complete");
        } catch (err){
            console.log(err);
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
                    { success ? <Alert severity="success">Upload Successfull</Alert> : null }
                    <InputTitle title={recipe.title} handleInput={handleInput}/>
                   {/* <DropZone image={image} handleInputPicture={handleInputPicture}/>*/}

                    {/*<DropzoneArea dropzoneText="Drag & drop your image here or click" onChange={handleInputPicture}/>*/}
                    <ButtonUploadPicture image={imgPreview} handleInputPicture={handleInputPicture}/>
                    <InputDescription description={recipe.description} handleInput={handleInput} />
                    <InputPortions portions={recipe.portions} handleInput={handleInput}/>
                    <InputIngredients recipe={recipe} setRecipe={setRecipe}/>
                    <InputInstructions instructions={recipe.instructions} handleInput={handleInput} />
                    <Stack style={{justifyContent: 'center'}} direction="row" spacing={{xs: 1, sm: 2, md: 4}}>

                        <Button onClick={postRecipe}  type="submit" variant="contained" endIcon={<SendIcon />}>
                            Submit
                        </Button>
                    </Stack>

                </FormControl>
            </Box>
        </div>
    );
}

export default PostNewRecipe;