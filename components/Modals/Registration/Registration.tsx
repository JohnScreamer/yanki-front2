import { FC, useEffect } from "react";
import {
    Controller,
    FieldValues,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import Input from "../../UI/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUserRegistrationMutation } from "../../../service/api/game";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { $CombinedState } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { setProfile } from "../../../Redux/Slice/Profile";
import { useRouter } from "next/router";
import ShowError from "../../PopUp/ShowErrorPopUp";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
const schema = yup
    .object({
        email: yup
            .string()
            .required("Обовязкове поле.")
            .email("Не коректна пошта"),
        password: yup
            .string()
            .required("Обовязкове поле.")
            .min(8, "Не менше 8 символів.")
            .matches(/[a-zA-Z]/, "Тілки латинські літери."),
    })
    .required();
type Inputs = {
    email: string;
    password: string;
    username: string;
};
type RegistrationType = {};

const Registration: FC<RegistrationType> = () => {
    const [
        userRegistration,
        { isError, isLoading: load, isSuccess, data, error },
    ] = useUserRegistrationMutation();
    const router = useRouter();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (isSuccess && data?.response) {
            dispatch(setProfile(data.response));
        }
    }, [data, dispatch]);
    const goBack = () => {
        const newRoute = router.query;
        delete newRoute.registration;
        router.push({ query: { ...newRoute } });
    };

    if (isSuccess && data?.token) {
        data?.token && Cookies.set("auth", data?.token);
        toast(`Привіт! Вдалих покупок.`, {
            icon: "👏",
        });
        goBack();
    }
    const {
        handleSubmit,
        formState: { errors, isLoading },
        control,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
            username: "",
        },
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        userRegistration(data);
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[20px] justify-center mx-[50px] max-[768px]:mx-0  w-[400px] max-[768px]:w-full "
        >
            <h3 className="text-center text-xl">Регістрація</h3>

            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <Input
                        fn={() => {}}
                        className="w-full placeholder:text-start py-[15px] px-[15px] font-extralight"
                        value=""
                        field={field}
                        error={errors.email?.message}
                        placeholder="Ваш E-Mail"
                    />
                )}
            />
            <Controller
                name="username"
                control={control}
                render={({ field }) => (
                    <Input
                        fn={() => {}}
                        className="w-full placeholder:text-start py-[15px] px-[15px] font-extralight"
                        value=""
                        field={field}
                        error={errors.email?.message}
                        placeholder="Никнейм"
                    />
                )}
            />
            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <Input
                        fn={() => {}}
                        value=""
                        field={field}
                        placeholder="Ваш пароль"
                        type="password"
                        error={errors.password?.message}
                        className="w-full placeholder:text-start py-[15px] px-[15px] font-extralight"
                    />
                )}
            />
            <DefaultBtn type="submit">Війти</DefaultBtn>
            <ShowError error={error} isError={isError} />
        </form>
    );
};

export default Registration;
