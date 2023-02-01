import { FC } from "react";
import Image from "next/image";
import { PAY_INFORMATION } from "../../common/constants/payInfo";
type Pay_info_wrapperType = {};

const Pay_info_wrapper: FC<Pay_info_wrapperType> = () => {
    return (
        <section className="Container flex flex-col gap-2">
            <h1 className="text-[20px]">Про оплату</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                sunt quisquam saepe libero, pariatur possimus.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul className="flex  flex-wrap m-[-15px]">
                {PAY_INFORMATION.map((el, i) => (
                    <li
                        className="flex flex-col gap-[10px] lg:w-1/6 p-[15px] items-center justify-center sm:w-1/3 w-full    "
                        key={i}
                    >
                        <Image src={el.icon} width={30} height={30} />
                        <div></div>
                        <div className="text-center">{el.text}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Pay_info_wrapper;
