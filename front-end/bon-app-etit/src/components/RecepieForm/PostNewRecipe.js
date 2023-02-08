import React, {useState} from 'react';
import InputIngredient from "./Ingredient/InputIngredient";
import InputInstructions from "./Instructions/InputInstructions";
import {Box} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputTitle from "./InputTitle";
import FormTitle from "../FormTitle";
import InputDescription from "./InputDescription";
import ButtonUpload from "../ButtonUpload";


//Todo: Produce a Recipe form the Form and send Post to DB & Toggle Form
function PostNewRecipe() {
    const[ingredients, setIngredients] = useState([
       /* {
            id:1,
            name:"",
            amount:0,
            unit:"g"
        },
        {
            id:2,
            name:"",
            amount:0,
            unit:"g"
        },
        {
            id:3,
            name:"",
            amount:0,
            unit:"g"
        }*/
    ]);

    const [recipe, setRecipe] = useState({
        title:"",
        description:"",
        ingredients:ingredients,
        instructions:""
    });
    const handleInput = (e) => {
        setRecipe({
            ...recipe,
            [e.target.name]: e.target.value,
        })
    }
    //console.log(recipe)
    const handleIngredients = (e) =>{
        console.log(e.target.value)
        console.log(e.target.id)
        //setIngredients(e.target.value)
    }

    return (
        <div align="center" >
            <Box
                container="true"
                maxWidth="lg"
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl>
                    <FormTitle text="Add a new Recipe"/>
                    <InputTitle title={recipe.title} handleInput={handleInput}/>
                    <InputDescription description={recipe.description} handleInput={handleInput} />
                    <InputIngredient ingredients={ingredients} handelIngredients={handleIngredients}/>
                    <InputInstructions instructions={recipe.instructions} handleInput={handleInput} />
                    <ButtonUpload/>
                </FormControl>
            </Box>
        </div>
    );
}

export default PostNewRecipe;