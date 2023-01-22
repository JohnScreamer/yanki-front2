import { FC, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema, editProfileSchema } from "../../../common/shema/Sheme";
import Input from "../../UI/Input/Input";
import {
    usePostNewOrderMutation,
    useUserEditProfileMutation,
} from "../../../service/api/game";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { EditProfileBody } from "../../../Types/authTypes";
import { setProfile } from "../../../Redux/Slice/Profile";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
type EditPersonalInfoType = {};

const EditPersonalInfo: FC<EditPersonalInfoType> = () => {
    const route = useRouter();
    const userDate = useAppSelector((state) => state.profile.profile);
    const isAuth = useAppSelector((state) => state.profile.isAuth);
    const dispatch = useAppDispatch();
    if (!isAuth) {
        route.push("/");
    }
    const notify = () => toast.success("Профіль змінено!");
    const { email, city, _id, lastName, firstName, postNumber, phone } =
        userDate || {};
    const {
        handleSubmit,
        formState: { errors, isLoading },
        control,
        reset,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: email || "",
            phone: phone || "",
            firstName: firstName || "",
            lastName: lastName || "",
            postNumber: postNumber || "",
            city: city || "",
        },
        resolver: yupResolver(editProfileSchema),
    });
    const [
        editProfile,
        { isLoading: newOrderLoading, isError, data, isSuccess },
    ] = useUserEditProfileMutation();
    console.log(errors);
    useEffect(() => {
        if (isSuccess && data?.response) {
            dispatch(setProfile(data?.response));
            notify();
        }
    }, [isSuccess, data?.response]);

    const onSubmit: SubmitHandler<EditProfileBody> = (data) => {
        const { city, email, lastName, firstName, phone, postNumber } = data;
        editProfile({
            city,
            email,
            lastName,
            phone,
            firstName,
            postNumber,
        });
    };
    return (
        <div className="Container">
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex  mt-[20px]  flex-col  w-full"
                >
                    <div className="flex gap-[20px] flex-col">
                        <h4>Персональні данні:</h4>
                        <div className="flex flex-wrap m-[-10px]">
                            <div className="md:w-1/4 w-full p-[10px]">
                                <Controller
                                    name="firstName"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder={"Ваше ім`я"}
                                            value={""}
                                            error={errors.firstName?.message}
                                            className="w-full"
                                            field={field}
                                            fn={() => {}}
                                        />
                                    )}
                                />
                            </div>
                            <div className="md:w-1/4 w-full p-[10px]">
                                <Controller
                                    name="lastName"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder={"Ваша фамілія"}
                                            value={""}
                                            className="w-full"
                                            error={errors.lastName?.message}
                                            field={field}
                                            fn={() => {}}
                                        />
                                    )}
                                />
                            </div>
                            <div className="md:w-1/4 w-full p-[10px]">
                                <Controller
                                    name="email"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder={"Ваш e-mail"}
                                            value={""}
                                            field={field}
                                            error={errors.email?.message}
                                            className="w-full"
                                            fn={() => {}}
                                        />
                                    )}
                                />
                            </div>
                            <div className="md:w-1/4 w-full p-[10px]">
                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder={"Ваш телефон"}
                                            value={""}
                                            className="w-full"
                                            error={errors.phone?.message}
                                            field={field}
                                            fn={() => {}}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <h4>Адрес доставки:</h4>
                        <div className="flex flex-wrap m-[-10px]">
                            <div className="md:w-1/2 w-full p-[10px]">
                                <Controller
                                    name="city"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder={"Місто"}
                                            value={""}
                                            className="w-full"
                                            field={field}
                                            error={errors.city?.message}
                                            fn={() => {}}
                                        />
                                    )}
                                />
                            </div>
                            <div className="md:w-1/2 w-full p-[10px]">
                                <Controller
                                    name="postNumber"
                                    control={control}
                                    render={({ field }) => (
                                        <Input
                                            placeholder={"ВІділення пошти"}
                                            value={""}
                                            className="w-full"
                                            field={field}
                                            error={errors.postNumber?.message}
                                            fn={() => {}}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    <DefaultBtn className="mt-[20px]" type="submit">
                        Оновити інформацію{" "}
                    </DefaultBtn>
                </form>
            </div>
        </div>
    );
};

export default EditPersonalInfo;
