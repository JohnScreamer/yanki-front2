import * as yup from "yup";

export const commentSchema = yup
    .object({
        rating: yup
            .number()
            .min(1, "Обовязкове поле")
            .required("Обовязкове поле."),
        text: yup
            .string()
            .required("Обовязкове поле.")
            .min(2, "Не менше 2 символів."),
    })
    .required();
