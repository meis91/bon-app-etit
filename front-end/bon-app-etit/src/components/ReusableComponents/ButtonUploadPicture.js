import React from 'react';
import {Button, IconButton} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import FormSubtitle from "./FormSubtitle";

function ButtonUploadPicture({handleInputPicture}) {

    return (
        <div className="btn-upload" align="left">
            <FormSubtitle text="Image"/>
            <IconButton color="primary" aria-label="upload picture" component="label" >
                <input name="image"  hidden accept="image/*" multiple type="file" onChange={handleInputPicture} />
                <AddAPhotoIcon/>
            </IconButton>
        </div>
    );
}

export default ButtonUploadPicture;