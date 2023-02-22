import React, {useState} from 'react';
import {IconButton} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import FormSubtitle from "./FormSubtitle";
import {DropzoneArea} from "mui-file-dropzone";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ButtonUploadPicture({handleInputPicture, image}) {


    return (
        <div className="btn-upload" align="center">
            <FormSubtitle text="Image"/>
            {!image
                ?
            <IconButton color="primary" aria-label="upload picture" component="label" >
                <input name="image"  hidden accept="image/*" multiple type="file" onChange={handleInputPicture} />
                <AddAPhotoIcon/>
            </IconButton>
                :
            <CheckCircleIcon color="success"/>}
            {/* <DropzoneArea showFileNames={true} showPreviewsInDropzone={true} filesLimit={1} dropzoneText="Drag & drop your image here or click" onChange={handleInputPicture}/>*/}
        </div>
    );
}

export default ButtonUploadPicture;