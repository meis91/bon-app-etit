import { ReactComponent as LogoSvg } from "./../../logo/gutenapp.svg";
import React from 'react';
import {IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Logo() {
    const INDEX_URL = "/";
    const navigate = useNavigate();
    const handleClick = () => {navigate(INDEX_URL)}

    return (
        <div>
            <IconButton onClick={handleClick}>
                <LogoSvg width="10rem" />
            </IconButton>
        </div>
    );
}

export default Logo;