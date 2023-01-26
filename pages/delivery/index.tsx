import Image from "next/image";
import { FC } from "react";
import {
    deliveryMainText,
    deliveryStepsArr,
    deliverySubText,
} from "../../common/constants/deliveryTexts";
import HeadLayout from "../../components/layouts/HeadLayout";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";

type indexType = {};
const urlName = ["Головна", "Доставка"];
const index: FC<indexType> = () => {
    return (
        <HeadLayout name="Достаки">
            <section className="Container pb-[50px] ">
                <Scrumbs arrName={urlName} />
                <h1 className="text-xl my-[20px]">Доставка</h1>
                <article className="mb-[40px] flex gap-[30px] md:flex-row flex-col">
                    <p className="md:w-1/2 w-full">{deliveryMainText}</p>
                    <p className="md:w-1/2 w-full">{deliverySubText}</p>
                </article>

                <h2 className="mb-[30px]">Lorem ipsum dolor sit amet.</h2>

                <ul className="flex gap-[15px] md:flex-row flex-col">
                    {deliveryStepsArr.map((el, i) => (
                        <li key={i} className="flex items-center">
                            <div className="w-[50px] h-[50px] shrink-0 mr-[15px]">
                                <Image
                                    src={el.icon}
                                    alt="крок"
                                    objectFit="cover"
                                />
                            </div>
                            <p>{el.text}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </HeadLayout>
    );
};

export default index;
