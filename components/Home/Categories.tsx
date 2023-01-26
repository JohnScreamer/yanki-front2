import Image from "next/image";
import { FC } from "react";
import { Slider } from "../../utiles/slider";
import { SwiperSlide } from "swiper/react";
import { categoriesList } from "../../common/constants/categoriesArr";
import Link from "next/link";
type CategoriesType = {};

const Categories: FC<CategoriesType> = () => {
    const list = categoriesList.map((el) => (
        <SwiperSlide key={el.name}>
            <Link href={`${el.url}?platform=${el.categories}`}>
                <li className="sm:w-[273px]  sm:h-[450px] group h-[230px] w-[165px] relative flex flex-col justify-end card cursor-pointer hover:scale-105 duration-200">
                    <Image
                        src={el.img}
                        layout="fill"
                        alt="категорія"
                        objectFit="cover"
                        className="absolute z-0  "
                    />
                    <h3 className="relative z-10  p-2 ms:text-xl text-lg  text-white dark:bg-accent70-dark group-hover:bg-accent-light dark:group-hover:bg-accent75-dark   bg-accent75-light w-full text-center ">
                        {el.name}
                    </h3>
                </li>
            </Link>
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
