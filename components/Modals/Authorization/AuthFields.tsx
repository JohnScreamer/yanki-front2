import { FC } from "react";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { AuthFieldsType } from "../../../Types/authTypes";
import Input from "../../UI/Input/Input";

const AuthFields: FC<AuthFieldsType> = ({
    control,
    errors,
    goToRegistration,
    goToResetPass,
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
        </>
    );
};

export default AuthFields;
