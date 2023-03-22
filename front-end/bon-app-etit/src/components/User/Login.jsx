import React, {useContext} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "../../api/axios"
import {useNavigate} from "react-router-dom";
import { useFormik} from "formik";
import {UserContext} from "../../context/UserContext";
import {loginValidationSchema} from "../../schemas";

function Login(props) {
    const AUTHENTICATION_URL = "/v1/auth/authenticate";
    const HOME_URL = "/";
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext);



    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: loginValidationSchema,
        onSubmit: values => {
            loginRequest(values);
        },
    });

    const loginRequest = async (data) => {
        try {
            let response = await axios.post(
                AUTHENTICATION_URL,
                data,
            )
            setUser(response.data.username);
            sessionStorage.setItem("token", response.data.token);
            sessionStorage.setItem("userId", response.data.id);
            sessionStorage.setItem("username", response.data.username);
            sessionStorage.setItem("email", response.data.email);
            sessionStorage.setItem("role", response.data.role);
            sessionStorage.setItem("loggedIn", JSON.stringify(true));
            alert("Login successful")
            navigate(HOME_URL)
        } catch (error){
            console.log(error);
            alert("Login failed, please try again ");
        }
    }


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
                    <form onSubmit={formik.handleSubmit}>
                        <Box  noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.errors.email}
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
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.errors.password}
                            />
                           {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />*/}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
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
                    </form>

                </Box>
            </Container>
            <br/>
            <br/>
        </div>
    );
}

export default Login;