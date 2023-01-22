import * as yup from "yup";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const orderSchema = yup
    .object({
        email: yup
            .string()
            .required("Обовязкове поле.")
            .email("Не коректна пошта."),
        name: yup
            .string()
            .required("Обовязкове поле.")
            .min(3, "Не менше 3 символів."),
        lastName: yup
            .string()
            .required("Обовязкове поле.")
            .min(3, "Не менше 3 символів."),
        city: yup
            .string()
            .required("Обовязкове поле.")
            .min(3, "Не менше 3 символів."),
        phone: yup.string().matches(phoneRegExp, "Не валідний номер"),
        postAddress: yup
            .string()
            .required("Обовязкове поле.")
            .min(3, "Не менше 3 символів."),
    })
    .required();

export const editProfileSchema = yup
    .object({
        email: yup
            .string()
            .required("Обовязкове поле.")
            .email("Не коректна пошта."),
        firstName: yup
            .string()
            .required("Обовязкове поле.")
            .min(3, "Не менше 3 символів."),
        lastName: yup
            .string()
            .required("Обовязкове поле.")
            .min(3, "Не менше 3 символів."),
        city: yup
            .string()
            .required("Обовязкове поле.")
            .min(3, "Не менше 3 символів."),
        phone: yup.string().matches(phoneRegExp, "Не валідний номер"),
        postNumber: yup
            .string()
            .required("Обовязкове поле.")
            .min(3, "Не менше 3 символів."),
    })
    .required();
