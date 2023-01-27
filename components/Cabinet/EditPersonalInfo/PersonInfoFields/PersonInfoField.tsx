import { FC } from "react";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { EditProfileBody } from "../../../../Types/authTypes";
import Input from "../../../UI/Input/Input";

type PersonInfoFieldType = {
    control: Control<EditProfileBody, any>;
    errors: Partial<FieldErrorsImpl<EditProfileBody>>;
};

const PersonInfoField: FC<PersonInfoFieldType> = ({ control, errors }) => {
    return (
        <>
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
        </>
    );
};

export default PersonInfoField;
