import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import Aside from "../../components/Catalog/Aside/Aside";
import Filters from "../../components/Catalog/Filters/Filters";
import Pagination from "../../components/layouts/Pagination/Pagination";
import Card from "../../components/UI/Card/Card";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
import VideogameAssetOffIcon from "@mui/icons-material/VideogameAssetOff";
import {
    useGetAllGamesQuery,
    useLazyGetAllGamesQuery,
} from "../../service/api/game";
import { AllGames } from "../../Types/gameType";
import { isPropNull } from "../../utiles/isPropNull";
import { api } from "../../service/axiosApiRequest/api";
import HeadLayout from "../../components/layouts/HeadLayout";
import toast from "react-hot-toast";
import Loader from "../../components/UI/Loader/Loader";
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
    const { amount, games } = newData || data || {};
    const router = useRouter();
    const currentPage = router.query.page || 1;
    const [filter, setFilter] = useState<AllFiltersType>(router.query);
    const handlerPagination = (page: number) => {
        getGamesTrigger({ ...isPropNull(filter), page });
        router.push(
            {
                pathname: "/catalog",
                query: isPropNull({ ...isPropNull(filter), page }),
            },
            undefined,
            { shallow: true }
        );
        setFilter(isPropNull({ ...isPropNull(filter), page }));
    };
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
                                fn={setFilter}
                                getGamesTrigger={getGamesTrigger}
                            />
                        </aside>
                        <div className=" flex flex-col w-full">
                            <Filters
                                filter={filter}
                                getGamesTrigger={getGamesTrigger}
                                fn={setFilter}
                            />
                            <Pagination
                                count={amount}
                                page={+currentPage}
                                fn={(page) => handlerPagination(page)}
                            >
                                {games.length ? (
                                    <ul className="flex  flex-wrap  m-[-7.5px] ">
                                        {games.map((el) => (
                                            <Card key={el._id} game={el} />
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="flex justify-center items-center flex-col gap-3">
                                        <h2 className="text-center">
                                            Нічого не знайдено
                                        </h2>
                                        <VideogameAssetOffIcon className="h-[100px] w-[100px]" />
                                    </div>
                                )}
                            </Pagination>
                        </div>
                    </div>
                </div>
            </>
        </HeadLayout>
    );
};

export default catalog;
