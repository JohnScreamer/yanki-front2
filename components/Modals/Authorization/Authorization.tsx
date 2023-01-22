import { FC, useEffect, useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import Input from "../../UI/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import {
    gameApi,
    useLazyGetFavoriteQuery,
    useUserLoginMutation,
} from "../../../service/api/game";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { setFavorite, setProfile } from "../../../Redux/Slice/Profile";
import { useRouteTo } from "../../../Hooks/useRouteTo";

import toast from "react-hot-toast";
import Cookies from "js-cookie";

const schema = yup
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
type Inputs = {
    email: string;
    password: string;
};

type AuthorizationType = {};

const Authorization: FC<AuthorizationType> = () => {
    const [userLogin, { isError, isLoading: load, isSuccess, data, error }] =
        useUserLoginMutation();

    const dispatch = useAppDispatch();
    const [
        getFavTrigger,
        { data: favData, isSuccess: isSuccessFav, isError: favError },
    ] = useLazyGetFavoriteQuery();
    useEffect(() => {
        if (isSuccess && data?.response) {
            dispatch(setProfile(data.response));
            getFavTrigger(data.response._id);
        }
    }, [data, dispatch]);
    useEffect(() => {
        if (isSuccessFav && favData?.data) {
            dispatch(setFavorite(favData.data.goods));
        }
    }, [favData?.data, dispatch]);
    useEffect(() => {
        if (isError) {
            toast.error("Щось пішло не так.");
        }
        if (favError) {
            toast.error("Щось пішло не так.Не вдалось завантажити обране.");
        }
    }, [isError, favError]);
    const goTo = useRouteTo();
    const goToRegistration = goTo(["authorization"], "registration");
    const goToResetPass = goTo(["authorization"], "resetPass");
    const goBack = goTo(["authorization"], null);
    const firstTime = useRef(true);
    if (isSuccess && isSuccessFav) {
        goBack();
        if (firstTime.current) {
            toast(`Привіт! Вдалих покупок.`, {
                icon: "👏",
            });
            firstTime.current = false;
            Cookies.set("frontAuyh", "zxc");
        }
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
        },
        resolver: yupResolver(schema),
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        userLogin(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[20px] justify-center w-[400px] max-[768px]:w-full "
        >
            <h3 className="text-center text-xl">Авторизація</h3>
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
            {/* <ShowError error={error} isError={isError} /> */}

            <div className="flex justify-between items-center max-[768px]:text-sm">
                <button
                    type="button"
                    onClick={goToResetPass}
                    className="underline hover:text-accent-light dark:hover:accent-accent75-dark cursor-pointer "
                >
                    Забули пароль?
                </button>{" "}
                <button
                    type="button"
                    onClick={goToRegistration}
                    className="underline hover:text-accent-light dark:hover:accent-accent75-dark cursor-pointer"
                >
                    Немає акаунта?
                </button>
            </div>
            <DefaultBtn type="submit">Війти</DefaultBtn>
        </form>
    );
};

export default Authorization;
