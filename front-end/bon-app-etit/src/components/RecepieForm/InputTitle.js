import React from 'react';
import FormSubtitle from "../FormSubtitle";
import InputTextMiddle from "./Ingredient/InputTextMiddle";

function InputTitle(props) {
    return (
        <div align="left">
            <FormSubtitle text={"Title"}/>
            <InputTextMiddle label={"Titel"} placeholder={"Recipe Name"}/>
        </div>
    );
}

export default InputTitle;