import { FC, useEffect, useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import Input from "../../UI/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    useLazyGetFavoriteQuery,
    useUserLoginMutation,
} from "../../../service/api/game";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { setFavorite, setProfile } from "../../../Redux/Slice/Profile";
import { useRouteTo } from "../../../Hooks/useRouteTo";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { authSchema } from "../../../common/shema/authorization";
import AuthFields from "./AuthFields";

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
            data?.token && Cookies.set("auth", data?.token);
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
        resolver: yupResolver(authSchema),
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
            <AuthFields
                control={control}
                errors={errors}
                goToRegistration={goToRegistration}
                goToResetPass={goToResetPass}
            />
            <DefaultBtn type="submit">Війти</DefaultBtn>
        </form>
    );
};

export default Authorization;
