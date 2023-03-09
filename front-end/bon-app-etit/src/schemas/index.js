import * as yup from "yup";



export const loginValidationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('Please Enter your password')
});