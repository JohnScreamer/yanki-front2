import * as yup from "yup";

export const COMMENT_SCHEMA = yup
    .object({
        rating: yup
            .number()
            .min(1, "Обовязкове поле")
            .required("Обовязкове поле."),
        text: yup
            .string()
            .required("Обовязкове поле.")
            .min(4, "Не менше 4 символів."),
    })
    .required();
