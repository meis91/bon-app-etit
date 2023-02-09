import React from 'react';
import {Button, IconButton} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import FormSubtitle from "./FormSubtitle";
import AddCircleIcon from "@mui/icons-material/AddCircle";



function ButtonUploadPicture() {
    return (
        <div className="btn-upload" align="left">
            <FormSubtitle text="Image"/>
            <IconButton color="primary" aria-label="upload picture" component="label" >
                <input  hidden accept="image/*" multiple type="file" />
                <AddAPhotoIcon/>
            </IconButton>
        </div>
    );
}

export default ButtonUploadPicture;