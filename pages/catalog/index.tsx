import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Aside from "../../components/Catalog/Aside/Aside";
import Filters from "../../components/Catalog/Filters/Filters";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
import { useLazyGetAllGamesQuery } from "../../service/api/game";
import { AllGames } from "../../Types/gameType";
import { api } from "../../service/axiosApiRequest/api";
import HeadLayout from "../../components/layouts/HeadLayout";
import toast from "react-hot-toast";
import GoodsList from "../../components/Catalog/GoodsList/GoodsList";
type CatalogType = {
    data: AllGames;
};

const urlName = ["Головна", "Каталог", "Гра"];
export type AllFiltersType = {
    page?: number;
    sort?: string;
    name?: string | null;
    order?: string;
    ["price[gte]"]?: number;
    ["price[lte]"]?: number;
    platform?: string;
    publisher?: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const param = context.query;

    const newData = (await api(context).apiReq.getAllGames({ ...param })).data;

    if (!newData || newData.status !== "ok") {
        return { notFound: true };
    }
    return {
        props: {
            data: newData,
        },
    };
};

const catalog: FC<CatalogType> = ({ data }) => {
    const [getGamesTrigger, { isLoading, isError, data: newData, error }] =
        useLazyGetAllGamesQuery();
    const { amount, games } = newData || data || { amount: 0, games: [] };
    const router = useRouter();
    const [filter, setFilter] = useState<AllFiltersType>(router.query);

    if (isError) {
        toast.error("Упс...Щось пішло не так(.");
    }

    return (
        <HeadLayout name="Каталог">
            <>
                <div className="Container">
                    <Scrumbs arrName={urlName} />
                </div>
                <div className="Container mx-auto">
                    <div className="flex md:flex-row flex-col">
                        <aside className=" md:w-[180px]  w-full  pr-[0px] md:pr-[5px] ">
                            <Aside
                                filter={filter}
                                setFilter={setFilter}
                                getGamesTrigger={getGamesTrigger}
                            />
                        </aside>
                        <div className=" flex flex-col w-full">
                            <Filters
                                order={filter.order}
                                platform={filter.platform}
                                publisher={filter.publisher}
                                sort={filter.sort}
                                getGamesTrigger={getGamesTrigger}
                                fn={setFilter}
                            />

                            <GoodsList
                                games={games}
                                amount={amount}
                                setFilter={setFilter}
                                getGamesTrigger={getGamesTrigger}
                            />
                        </div>
                    </div>
                </div>
            </>
        </HeadLayout>
    );
};

export default catalog;
