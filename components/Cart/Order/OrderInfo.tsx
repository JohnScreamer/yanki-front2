import { useRouter } from "next/router";
import { FC } from "react";
import { useAppSelector } from "../../../Hooks/common";
import Price from "../../../utiles/currency/Currency";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";

type OrderInfoType = {
    totalPrice: number;
};

const OrderInfo: FC<OrderInfoType> = ({ totalPrice }) => {
    const router = useRouter();
    const isAuth = useAppSelector((state) => state.profile.isAuth);
    const goToAuth = () => {
        router.push({ query: { authorization: true } });
    };
    return (
        <div className="flex  md:max-w-[300px] w-full flex-col gap-[20px]">
            <ul className="flex flex-col gap-[20px]">
                {isAuth ? null : (
                    <li
                        onClick={goToAuth}
                        className="underline text-accent-light dark:text-accent75-dark cursor-pointer"
                    >
                        Увійти в особистий кабінет
                    </li>
                )}
                <li className="uppercase underline cursor-pointer">
                    Умови доставки
                </li>
                <li className="uppercase underline cursor-pointer">
                    Умови обміна і повернення
                </li>
                <li className="uppercase underline cursor-pointer">
                    Інформація про оплату
                </li>
            </ul>
            <div className="flex justify-between">
                <span className="uppercase">Сумма:</span>
                <Price price={totalPrice} />
                {/* <span className="font-bold font-mono flex gap-1  ">
                    {totalPrice}
                    <span>грн</span>
                </span> */}
            </div>
            <DefaultBtn
                type="submit"
                padding
                className="text-sm p-3 px-2 py-3 lg:px-[9px]  "
                fn={() => {
                    console.log(22);
                }}
            >
                Оформлення замовлення
            </DefaultBtn>
            <p className="text-sm md:text-left text-center ">
                Натискаючи на кнопку «оплатити замовлення», я приймаю умови
                публічної оферти та політики конфіденційності
            </p>
        </div>
    );
};

export default OrderInfo;
