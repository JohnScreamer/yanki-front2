import { Dispatch, FC, memo, SetStateAction } from "react";
import VideogameAssetOffIcon from "@mui/icons-material/VideogameAssetOff";
import { Game } from "../../../Types/gameType";
import Card from "../Card/Card";

import { isPropNull } from "../../../utiles/isPropNull";
import { useRouter } from "next/router";
import Pagination from "../../layouts/Pagination/Pagination";
import { AllFiltersType } from "../../../Types/catalogTypes";
type GoodsListType = {
    games: Array<Game>;
    getGamesTrigger: (data: any) => void;
    amount: number;
    setFilter: Dispatch<SetStateAction<AllFiltersType>>;
};

const GoodsList: FC<GoodsListType> = ({
    games,
    getGamesTrigger,
    amount,
    setFilter,
}) => {
    const router = useRouter();
    const currentParam = router.query;
    const currentPage = router.query.page || 1;
    const handlerPagination = (page: number) => {
        getGamesTrigger({ ...isPropNull(currentParam), page });
        router.push(
            {
                pathname: "/catalog",
                query: isPropNull({ ...isPropNull(currentParam), page }),
            },
            undefined,
            { shallow: true }
        );
        setFilter(isPropNull({ ...isPropNull(currentParam), page }));
    };
    return (
        <>
            <Pagination
                count={amount}
                page={+currentPage}
                fn={(page: number) => handlerPagination(page)}
            >
                <>
                    {games.length ? (
                        <section className="flex  flex-wrap  m-[-7.5px] ">
                            {games.map((el) => (
                                <Card key={el._id} game={el} />
                            ))}
                        </section>
                    ) : (
                        <section className="flex justify-center items-center flex-col gap-3">
                            <h2 className="text-center">Нічого не знайдено</h2>
                            <VideogameAssetOffIcon className="h-[100px] w-[100px]" />
                        </section>
                    )}
                </>
            </Pagination>
        </>
    );
};

export default memo(GoodsList);
