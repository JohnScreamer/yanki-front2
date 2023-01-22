import { FC } from "react";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import Link from "next/link";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
type OrderDoneType = {};

const OrderDone: FC<OrderDoneType> = () => {
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
            <DefaultBtn>
                <Link href={"/"}>Мої замовлення</Link>
            </DefaultBtn>
        </div>
    );
};

export default OrderDone;
