import React from "react";
import { FC } from "react";
import { Control, Controller, FieldErrorsImpl } from "react-hook-form";
import { OrderInputs } from "../../../Types/Order.Types";
import Input from "../../UI/Input/Input";

type OrderFieldsType = {
    control: Control<OrderInputs, any>;
    errors: Partial<FieldErrorsImpl<OrderInputs>>;
};

const OrderFields: FC<OrderFieldsType> = ({ control, errors }) => {
    return (
        <>
            <div className="flex gap-[20px] flex-col">
                <h3 className="mb-[10px] text-xl">Оформлення</h3>
                <h4>Персональні данні:</h4>
                <div className="flex flex-wrap m-[-10px]">
                    <div className="md:w-1/2 w-full p-[10px]">
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder={"Ваше ім`я"}
                                    value={""}
                                    error={errors.name?.message}
                                    className="w-full"
                                    field={field}
                                    fn={() => {}}
                                />
                            )}
                        />
                    </div>
                    <div className="md:w-1/2 w-full p-[10px]">
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
                    <div className="md:w-1/2 w-full p-[10px]">
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
                    <div className="md:w-1/2 w-full p-[10px]">
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
                            name="postAddress"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder={"ВІділення пошти"}
                                    value={""}
                                    className="w-full"
                                    field={field}
                                    error={errors.postAddress?.message}
                                    fn={() => {}}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderFields;
