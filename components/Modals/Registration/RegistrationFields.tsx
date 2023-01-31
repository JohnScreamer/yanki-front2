import { FC } from "react";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { RegistrationFieldsType } from "../../../Types/registrationTypes";
import Input from "../../UI/Input/Input";

const RegistrationFields: FC<RegistrationFieldsType> = ({
    control,
    errors,
}) => {
    return (
        <>
            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <Input
                        fn={() => {}}
                        className="w-full placeholder:text-start py-[15px] px-[15px] font-extralight"
                        value=""
                        field={field}
                        type="email"
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
        </>
    );
};

export default RegistrationFields;
