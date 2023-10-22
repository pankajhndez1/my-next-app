import * as Yup from "yup";
    export const signupSchema = Yup.object({
        name: Yup.string()
            .min(2, "Name must be at least 2 characters")
            .max(15, "Name can't exceed 15 characters")
            .required("schema's Please enter your name"),
        email: Yup.string()
            .email("Invalid email format")
            .required("schema's Please enter your email"),
        password: Yup.string()
            .min(7, "Password must be at least 7 characters")
            .required("schema's Please enter your password"),
        confirm_password: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("schema's Please enter your confirmed password"),
    });
