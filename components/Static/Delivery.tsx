import Image from "next/image";
import { FC } from "react";
import {
    DELIVETY_MAIN_TEXT,
    DELIVERY_SUB_TEXT,
    DELIVERY_STEPS,
} from "../../common/constants/deliveryTexts";

const DeliveryWrapper: FC = () => {
    return (
        <>
            <h1 className="text-xl my-[20px]">Доставка</h1>
            <article className="mb-[40px] flex gap-[30px] md:flex-row flex-col">
                <p className="md:w-1/2 w-full">{DELIVETY_MAIN_TEXT}</p>
                <p className="md:w-1/2 w-full">{DELIVERY_SUB_TEXT}</p>
            </article>

            <h2 className="mb-[30px]">Lorem ipsum dolor sit amet.</h2>

            <ul className="flex gap-[15px] md:flex-row flex-col">
                {DELIVERY_STEPS.map((el, i) => (
                    <li key={i} className="flex items-center">
                        <div className="w-[50px] h-[50px] shrink-0 mr-[15px]">
                            <Image src={el.icon} alt="крок" objectFit="cover" />
                        </div>
                        <p>{el.text}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default DeliveryWrapper;
