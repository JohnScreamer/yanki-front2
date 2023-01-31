import { Control, FieldErrorsImpl } from "react-hook-form";

export type RegistrationFieldsType = {
    control: Control<
        {
            email: string;
            password: string;
            username: string;
        },
        any
    >;
    errors: Partial<
        FieldErrorsImpl<{
            email: string;
            password: string;
            username: string;
        }>
    >;
};
