import FormSubtitle from "../../../ReusableComponents/FormSubtitle";
import {Box} from "@mui/material";
import ButtonAdd from "../../../ReusableComponents/ButtonAdd";
import ButtonRemove from "../../../ReusableComponents/ButtonRemove";
import React, {useEffect, useState} from "react";
import axios from "../../../../api/axios";

export default function InputTags() {
    // const [tags, setTags] = useState(null)
    //
    // useEffect(() => {
    //     axios.get(recipeUrl).then((response) => {
    //         setRecipes(response.data);
    //     });
    // }, []);

    return (
        <div>
            <FormSubtitle text="Tags"/>
            <Box>
                select tags
            </Box>
        </div>
    )
}