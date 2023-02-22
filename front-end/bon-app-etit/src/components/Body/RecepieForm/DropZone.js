import React, {useState} from 'react';
import {Button} from "@mui/material";
import {DropzoneArea, DropzoneDialog} from "mui-file-dropzone";

function DropZone({image, handleInputPicture}) {
    const [dropZone, setDropZone] = useState(false);



    function handleClose()
    {
        setDropZone(           false );
    }

    function handleSave(files)
    {
        console.log(files)
        handleInputPicture(files)
        setDropZone(           false );
    }

    function handleOpen()
    {
        setDropZone(true);
    }
return (
    <div>
        <Button onClick={handleOpen}>
            Add Image
        </Button>
        <DropzoneArea />
        {/*<DropzoneDialog
                open={dropZone}
                onSave={handleSave.bind(this)}
                acceptedFiles={['.jpeg', '.png', 'image/bmp', '.jpg']}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={handleClose}
            />*/}
        </div>
    );
}

export default DropZone;