import React, {useState} from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Registration(props) {
    const navigate = useNavigate();

    const postRegistration = async (data) => {
        let user = {
            "email":data.get("email"),
            "password":data.get("password")
        }
        console.log("reg: " + user)
        const REGISTRATION_URL = "http://localhost:8000/api/v1/auth/register"
        let resultRecipe = await axios.post(
            REGISTRATION_URL,
            user,
            ).then((response) =>{
            const navigationUrl = "/login"
            navigate(navigationUrl)
        }).catch((error) =>{
            alert("Something went wrong, try again")
            console.log(error);
        });
        console.log("send")
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
            verificationPW: data.get("verificationPW")
        });
         if (data.get("password") === data.get("verificationPW")){
             console.log("Password correct")

             data.delete("verificationPW")

             postRegistration(data);
         } else {
             alert("Password don't match, please try again")
         }



    };
    return (
        <div>
            <Container component="main" maxWidth="sm">
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Registration
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            /*onChange={handleInput}*/
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            /*onChange={handleInput}*/
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                        />
                        <TextField
                            /*onChange={handleInput}*/
                            margin="normal"
                            required
                            fullWidth
                            name="verificationPW"
                            label="Confirm Password"
                            type="password"
                            id="verificationPW"
                        />
                        {/*<FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />*/}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        {/*<Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>*/}
                    </Box>
                </Box>
            </Container>
            <br/>
            <br/>
        </div>
    );
}

export default Registration;