import { Control, FieldErrorsImpl } from "react-hook-form";

export interface AuthLogin {
    success: boolean;
    response: ProfileType;
    token: string;
}
export interface AuthMe {
    success: boolean;
    data: ProfileType;
    token: string;
}

export type AuthLoginResponse = {
    username: string;
    _id: string;
};
export type AuthLoginBody = {
    email: string;
    password: string;
};
export type RegistrationType = {
    email: string;
    password: string;
    username: string;
};
export type ProfileType = {
    username: string;
    email: string;
    role: any;
    phone: string;
    _id: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    avatar?: string;
    description?: string;
    postNumber?: string;
    createdAt?: string;
    updatedAt?: string;
    __v: number;
};

export type EditProfileBody = {
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    city: string;
    postNumber: string;
    avatar?: string;
};

export type AuthFieldsType = {
    control: Control<
        {
            email: string;
            password: string;
        },
        any
    >;
    errors: Partial<
        FieldErrorsImpl<{
            email: string;
            password: string;
        }>
    >;
    goToResetPass: () => void;
    goToRegistration: () => void;
};
