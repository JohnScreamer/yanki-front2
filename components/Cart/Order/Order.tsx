import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../Hooks/common";
import Input from "../../UI/Input/Input";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "./../../../common/shema/Sheme";
import OrderInfo from "./OrderInfo";
import { usePostNewOrderMutation } from "../../../service/api/game";
import PopUp from "../../PopUp/PopUp";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
type Inputs = {
    email: string;
    phone: string;
    name: string;
    lastName: string;
    city: string;
    postAddress: string;
};
type OrderType = {};
const Order: FC<OrderType> = () => {
    const route = useRouter();

    const { totalPrice, amount, orderCart } = useAppSelector(
        (state) => state.cart
    );
    const isWindow = typeof window === "undefined" ? false : true;
    if (!amount && isWindow) {
        route.push("/");
    }
    const userDate = useAppSelector((state) => state.profile.profile);
    const isAuth = useAppSelector((state) => state.profile.isAuth);
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
            name: firstName || "",
            lastName: lastName || "",
            postAddress: postNumber || "",
            city: city || "",
        },
        resolver: yupResolver(orderSchema),
    });
    const [newOrder, { isLoading: newOrderLoading, isError, data, isSuccess }] =
        usePostNewOrderMutation();
    useEffect(() => {
        if (isError) {
            console.log(isError);
            toast.error("This didn't work.");
        }
        if (isSuccess) {
            route.replace({ query: { orderDone: true } });
            toast("success.");
            reset();
        }
    }, [isError, isSuccess]);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { city, email, lastName, name, phone, postAddress } = data;

        if (totalPrice) {
            newOrder({
                totalPrice,
                totalAmount: amount,
                goods: orderCart,
                city,
                email,
                lastName,
                phone,
                firstName: name,
                postAddresses: postAddress,
                user: _id || "",
            });
        }
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-[20px] md:flex-row flex-col "
        >
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
            {/* <PopUp
                alertType="warning"
                isVisible={isOrderError}
                setVisibleStatus={setErrorStatus}
                text="Упс.Виникла помилка.Спробуйте ще раз."
            />
            <PopUp
                alertType="success"
                isVisible={isOrdered}
                setVisibleStatus={setOrderStatus}
                text="Товар успішно замовлений."
            /> */}

            <OrderInfo totalPrice={totalPrice} />
        </form>
    );
};

export default Order;
