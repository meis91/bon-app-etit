import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "../../api/axios"
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as yup from 'yup';

function Registration() {
    const REGISTRATION_URL = "/v1/auth/register";
    const LOGIN_URL = "/login";
    const navigate = useNavigate();

    const validationSchema = yup.object({
        username: yup
            .string('Enter your username')
            .required('Username is required'),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .required('Please Enter your password')
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
        validationPwd: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password-confirmation is required')
            .oneOf([yup.ref("password"), null], "Password must match")
    });


    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            validationPwd: ""
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            registrationRequest(values);
        },
    });

    const registrationRequest = async (data) => {
        try {
            const resultRecipe = await axios.post(
                REGISTRATION_URL,
                data,
            )
            console.log(resultRecipe)
            alert("Registration successfull");
            navigate(LOGIN_URL)
        } catch (error) {
            alert("Something went wrong, please try again");
            console.log(error);
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
                        Registration
                    </Typography>
                    <form onSubmit={formik.handleSubmit}>
                        <Box  noValidate sx={{mt: 1}}>
                            <TextField
                                onChange={formik.handleChange}
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                helperText={formik.errors.username}
                            />
                            <TextField
                                onChange={formik.handleChange}
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
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.errors.password}
                            />
                            <TextField
                                onChange={formik.handleChange}
                                margin="normal"
                                required
                                fullWidth
                                name="validationPwd"
                                label="Confirm Password"
                                type="password"
                                id="validationPwd:"
                                value={formik.values.validationPwd}
                                onChange={formik.handleChange}
                                error={formik.touched.validationPwd && Boolean(formik.errors.validationPwd)}
                                helperText={formik.errors.validationPwd}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}
                            >
                                Register
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Container>
            <br/>
            <br/>
        </div>
    );
}

export default Registration;