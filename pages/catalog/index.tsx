import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Aside from "../../components/Catalog/Aside/Aside";
import CatalogWrapper from "../../components/Catalog/CatalogWrapper/CatalogWrapper";
import Filters from "../../components/Catalog/Filters/Filters";
import Pagination from "../../components/layouts/Pagination/Pagination";
import Card from "../../components/UI/Card/Card";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import Input from "../../components/UI/Input/Input";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
import { wrapper } from "../../Redux/store";
import {
    useGetAllGamesQuery,
    useLazyGetAllGamesQuery,
} from "../../service/api/game";
import { AllGames } from "../../Types/gameType";
import { isPropNull } from "../../utiles/isPropNull";
import * as cookie from "cookie";
import { setFavorite, setProfile } from "../../Redux/Slice/Profile";
import { api } from "../../service/axiosApiRequest/api";
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
    const { amount, games } = data || {};
    const router = useRouter();
    const currentPage = router.query.page || 1;
    const [trigger, { isLoading, isError, data: newData, error }] =
        useLazyGetAllGamesQuery();
    const [filter, setFilter] = useState<AllFiltersType>(router.query);

    return (
        <>
            <div className="Container">
                <Scrumbs arrName={urlName} />
            </div>
            <div className="Container mx-auto">
                <div className="flex md:flex-row flex-col">
                    <aside className=" md:w-[180px]  w-full  pr-[0px] md:pr-[5px] ">
                        <Aside filter={filter} fn={setFilter} />
                    </aside>
                    <div className=" flex flex-col w-full">
                        <Filters filter={filter} fn={setFilter} />
                        <Pagination
                            count={amount}
                            page={+currentPage}
                            fn={(page) =>
                                router.push({
                                    pathname: "/catalog",
                                    query: { ...isPropNull(filter), page },
                                })
                            }
                        >
                            <ul className="flex  flex-wrap  m-[-7.5px] ">
                                {games.map((el) => (
                                    <Card key={el._id} game={el} />
                                ))}
                            </ul>
                        </Pagination>
                    </div>
                </div>
            </div>
        </>
    );
};

export default catalog;
