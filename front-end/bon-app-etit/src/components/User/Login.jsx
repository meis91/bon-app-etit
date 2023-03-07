import React, {useState} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "../../api/axios"
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";

function Login(props) {
    const AUTHENTICATION_URL = "/v1/auth/authenticate"
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        /*validationSchema: validationSchema,*/
    });
    const loginRequest = async (data) => {
        let user = {
            "email":data.get("email"),
            "password":data.get("password")
        }
        console.log("log " + user)

        let resultRecipe = await axios.post(
            AUTHENTICATION_URL,
            user,
        ).then((response) =>{
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("loggedIn", JSON.stringify(true));
            alert("Login successful")
            const navigationUrl = "/"
            navigate(navigationUrl)
        }).catch((error) =>{
            console.log(error);
           alert("Login failed, please try again ");
        });

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        /*console.log({
            email: data.get("email"),
            password: data.get("password"),
        });*/

        loginRequest(data);

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
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
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
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/registration" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        <br/>
        <br/>
        </div>

);
}

export default Login;