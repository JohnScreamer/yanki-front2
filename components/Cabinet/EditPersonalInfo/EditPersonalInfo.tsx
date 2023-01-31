import { FC, useEffect, useState } from "react";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { setProfile } from "../../../Redux/Slice/Profile";
import toast from "react-hot-toast";

import Avatar from "./Avatar/Avatar";
import PersonInfoField from "./PersonInfoFields/PersonInfoField";
import { useSetEditProfile } from "../../../Hooks/useSetEditProfile";
type EditPersonalInfoType = {};

const EditPersonalInfo: FC<EditPersonalInfoType> = () => {
    const dispatch = useAppDispatch();

    const {
        control,
        errors,
        handleSubmit,
        isLoading,
        avatar,
        data,
        isSuccess,
        onSubmit,
        setAvatar,
    } = useSetEditProfile();

    useEffect(() => {
        if (isSuccess && data?.response) {
            dispatch(setProfile(data?.response));
            toast.success("Профіль змінено!");
        }
    }, [isSuccess, data?.response]);

    return (
        <div className="Container">
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex  mt-[20px]  flex-col  w-full"
                >
                    <div className="flex gap-[20px] flex-col">
                        <h4>Персональні данні:</h4>
                        <Avatar setAvatar={setAvatar} avatar={avatar} />
                        <PersonInfoField control={control} errors={errors} />
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
