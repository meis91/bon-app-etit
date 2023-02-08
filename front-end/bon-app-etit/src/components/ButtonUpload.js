import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "@mui/material";

ButtonUpload.propTypes = {

};

function ButtonUpload(props) {
    return (
        <div className="btn-upload" align="center">
            <Button variant="contained" component="label" size="large">
                Upload
                <input hidden accept="image/*" multiple type="file" />
            </Button>
        </div>
    );
}

export default ButtonUpload;