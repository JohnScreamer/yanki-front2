import { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { orderSchema } from "./../../../common/shema/Sheme";
import OrderInfo from "./OrderInfo";
import { usePostNewOrderMutation } from "../../../service/api/game";
import toast from "react-hot-toast";
import Loader from "../../UI/Loader/Loader";
import { OrderInputs } from "../../../Types/Order.Types";
import OrderFields from "./OrderFields";
import { clearCart } from "../../../Redux/Slice/Cart";
import { useRouteTo } from "../../../Hooks/useRouteTo";
import { getAllCartSelector } from "../../../utiles/selectors/cartSelectors";
import { getProfileSelector } from "../../../utiles/selectors/profileSelectors";

type OrderType = {};
const Order: FC<OrderType> = () => {
    const goTo = useRouteTo();
    const toOrderDone = goTo(null, "orderDone");
    const dispatch = useAppDispatch();
    const { totalPrice, amount, orderCart } =
        useAppSelector(getAllCartSelector);

    const userDate = useAppSelector(getProfileSelector);
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
        if (data?.status !== "ok" && isSuccess) {
            toast.error("Щось пішло не так.");
        }
    }, [data]);
    useEffect(() => {
        if (isError) {
            console.log(isError);
            toast.error("Щось пішло не так.");
        }
        if (isSuccess && data?.status === "ok") {
            toOrderDone();
            dispatch(clearCart());
            toast("Успішно замовлено.");
            reset();
        }
    }, [isError, isSuccess]);

    const onSubmit: SubmitHandler<OrderInputs> = (data) => {
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
            <OrderFields control={control} errors={errors} />

            <OrderInfo totalPrice={totalPrice} />
            {newOrderLoading && <Loader />}
        </form>
    );
};

export default Order;
