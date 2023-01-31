import * as yup from "yup";

export const authSchema = yup
    .object({
        email: yup
            .string()
            .required("Обовязкове поле.")
            .email("Не коректна пошта."),
        password: yup
            .string()
            .required("Обовязкове поле.")
            .min(8, "Не менше 8 символів.")
            .matches(/[a-zA-Z]/, "Тілки латинські літери."),
    })
    .required();
