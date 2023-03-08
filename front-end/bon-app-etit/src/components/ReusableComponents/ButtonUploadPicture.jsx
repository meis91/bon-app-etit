import React, {useEffect, useState} from 'react';
import {IconButton} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import FormSubtitle from "./FormSubtitle";
import {DropzoneArea} from "mui-file-dropzone";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CardMedia from "@mui/material/CardMedia";

function ButtonUploadPicture({handleInputPicture, image}) {
  /*  const [imgPreview, setImagePreview] = useState("");
    const reader = new FileReader();

    useEffect(() => {
        if(image){
            console.log(reader.readAsDataURL(image))
            setImagePreview(reader.readAsDataURL(image));
        }
    }, [imgPreview]);
*/


    return (
        <div className="btn-upload" align="center">
            <FormSubtitle text="Image"/>
            {!image
                ?
                <IconButton color="primary" aria-label="upload picture" component="label">
                    <input name="image" hidden accept="image/*" multiple type="file" onChange={handleInputPicture}/>
                    <AddAPhotoIcon/>
                </IconButton>
                :
                <CardMedia
                    align="center"
                    component="img"
                    src={image}
                    sx={{
                        flexGrow: 1,

                        width: 500,

                        maxWidth: 500
                    }}
                />
            }

        </div>
    );
}

export default ButtonUploadPicture;