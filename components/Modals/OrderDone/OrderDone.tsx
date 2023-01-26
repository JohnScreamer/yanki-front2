import { FC } from "react";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import Link from "next/link";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import { useRouter } from "next/router";
type OrderDoneType = {};

const OrderDone: FC<OrderDoneType> = () => {
    const router = useRouter();
    const toOrdersHistory = () => {
        router.push({ pathname: "/cabinet/orders", query: {} });
    };
    return (
        <div className="flex flex-col gap-[30px] justify-center mx-[50px] max-[768px]:mx-0  w-[400px] max-[768px]:w-full ">
            <h3 className="text-center text-xl">Замовлення пройшло успішно!</h3>
            <div className="text-center">
                <PlaylistAddCheckIcon className="w-[75px] h-[75px]" />
            </div>

            <p className="text-center">
                Для моніторингу замовлення перейдіть в особистий кабінет до
                вкладки мої замовлення!
            </p>

            <DefaultBtn fn={toOrdersHistory}>Мої замовлення</DefaultBtn>
        </div>
    );
};

export default OrderDone;
