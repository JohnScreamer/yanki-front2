import { SubmitHandler, useForm } from "react-hook-form";
import { getProfileSelector } from "../utiles/selectors/profileSelectors";
import { useAppSelector } from "./common";
import { yupResolver } from "@hookform/resolvers/yup";
import { editProfileSchema } from "../common/shema/Sheme";
import { useUserEditProfileMutation } from "../service/api/game";
import { EditProfileBody } from "../Types/authTypes";
import { useState } from "react";

export const useSetEditProfile = () => {
    const userDate = useAppSelector(getProfileSelector);

    const { email, city, _id, lastName, firstName, postNumber, phone, avatar } =
        userDate || {};
    const [ava, setAvatar] = useState(avatar || "");
    const {
        handleSubmit,
        formState: { errors, isLoading },
        control,
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
    const [editProfile, { data, isSuccess }] = useUserEditProfileMutation();

    const onSubmit: SubmitHandler<EditProfileBody> = (data) => {
        const { city, email, lastName, firstName, phone, postNumber } = data;
        editProfile({
            city,
            email,
            lastName,
            phone,
            firstName,
            postNumber,
            avatar: ava,
        });
    };
    return {
        handleSubmit,
        errors,
        isLoading,
        control,
        onSubmit,
        data,
        isSuccess,
        avatar: ava,
        setAvatar,
    };
};
