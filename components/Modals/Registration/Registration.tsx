import { FC, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserRegistrationMutation } from "../../../service/api/game";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { setProfile } from "../../../Redux/Slice/Profile";
import { useRouter } from "next/router";
import ShowError from "../../UI/PopUp/ShowErrorPopUp";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import RegistrationFields from "./RegistrationFields";
import { registrationSchema } from "../../../common/shema/registration";
import { defaultRegistrationValues } from "../../../common/constants/ragistrationFields";

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
        defaultValues: defaultRegistrationValues,
        resolver: yupResolver(registrationSchema),
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
            <RegistrationFields control={control} errors={errors} />
            <DefaultBtn type="submit">Війти</DefaultBtn>
            <ShowError error={error} isError={isError} />
        </form>
    );
};

export default Registration;
