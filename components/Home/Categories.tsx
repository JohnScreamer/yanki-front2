import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./Categories.module.scss";
import ps5 from "./../../public/img/ps5.webp";
import ps4 from "./../../public/img/ps4.webp";
import comp from "./../../public/img/comp.webp";
import xboxone from "./../../public/img/xboxone.webp";
import seriax from "./../../public/img/seriesx.jpg";
import switchnin from "./../../public/img/switch.jpg";

import { Slider } from "../../utiles/slider";
import { SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
type CategoriesType = {};
const categoriesList = [
    {
        name: "PlayStation 4",
        url: "#",
        img: ps4,
        categories: "PlayStation 4",
    },
    {
        name: "PlayStation 5",
        url: "/catalog",
        categories: "PlayStation 5",
        img: ps5,
    },
    { name: "PC", url: "/catalog", categories: "PC", img: comp },
    { name: "Xbox One", url: "/catalog", categories: "Xbox One", img: xboxone },
    {
        name: "Xbox seria X",
        url: "/catalog",
        categories: "Xbox One",
        img: seriax,
    },
    {
        name: "Nintendo switch",
        url: "/catalog",
        img: switchnin,
        categories: "Nintendo Switch",
    },
];

const Categories: FC<CategoriesType> = () => {
    const router = useRouter();
    const handlerGoToCatalog = (value: string) => {
        router.push({
            pathname: "/catalog",
            query: { platform: value },
        });
    };
    const list = categoriesList.map((el) => (
        <SwiperSlide key={el.name}>
            <li
                onClick={() => handlerGoToCatalog(el.categories)}
                className="sm:w-[273px]  sm:h-[450px] group h-[230px] w-[165px] relative flex flex-col justify-end card cursor-pointer hover:scale-105 duration-200"
            >
                <Image
                    src={el.img}
                    layout="fill"
                    objectFit="cover"
                    className="absolute z-0  "
                />
                <h3 className="relative z-10  p-2 ms:text-xl text-lg  text-white dark:bg-accent70-dark group-hover:bg-accent-light dark:group-hover:bg-accent75-dark   bg-accent75-light w-full text-center ">
                    {el.name}
                </h3>
            </li>
        </SwiperSlide>
    ));

    return (
        <div className="sm:py-[100px] py-[60px]  ">
            <div className="Container">
                <h2 className=" mb-[10px] sm:mb-[50px] sm:text-4xl text-base">
                    Категорії
                </h2>
                <div>
                    <ul className=" flex center overflow-x-hidden">
                        <Slider list={list} />
                    </ul>
                </div>
            </div>
            <div className="center overflow-hidden"></div>
        </div>
    );
};

export default Categories;
