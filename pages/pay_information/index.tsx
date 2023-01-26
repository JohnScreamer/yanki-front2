import Image from "next/image";
import { FC } from "react";
import { payInfoArr } from "../../common/constants/payInfo";
import HeadLayout from "../../components/layouts/HeadLayout";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";

type payType = {};
const urlName = ["Головна", "Інформаці про оплату"];
const pay: FC<payType> = () => {
    return (
        <HeadLayout name="Про оплату">
            <div className="Container pb-[50px]">
                <Scrumbs arrName={urlName} />
                <section className="Container flex flex-col gap-2">
                    <h1 className="text-[20px]">Про оплату</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui sunt quisquam saepe libero, pariatur possimus.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <ul className="flex  flex-wrap m-[-15px]">
                        {payInfoArr.map((el, i) => (
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
            </div>
        </HeadLayout>
    );
};

export default pay;
