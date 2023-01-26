import { FC, useState } from "react";
import Card from "../Cart/Card/Card";
import SelectList from "../UI/Select&DropList/SelectList/SelectList";
import { useAppSelector } from "../../Hooks/common";
import Price from "../../utiles/currency/Currency";
import { OrderList } from "../../Types/Order.Types";

type CardType = {
    data: OrderList;
};

const CardList: FC<CardType> = ({ data }) => {
    const list = data.goods.map((el, id) => (
        <Card noBorder game={el} key={el._id + id} ordered />
    ));
    const [status, setStatus] = useState(false);
    return (
        <SelectList
            listStatus={status}
            setListStatus={setStatus}
            defaultValue=""
            relative
            top={20}
            btnChildren={
                <div className="flex justify-between md:flex-nowrap flex-wrap py-[15px] w-full">
                    <div className="flex  flex-row md:flex-col md:w-1/4 w-full ">
                        <span className="text-start">ID</span>
                        <span className="font-bold text-start">{data._id}</span>
                    </div>

                    <div className="flex md:flex-col flex-row md:w-1/4 w-1/2">
                        <span className="text-start">Статус:</span>
                        <span className="font-bold text-start">
                            {" "}
                            {data.isDelivered ? "Виконано" : "Доставляється"}
                        </span>
                    </div>
                    <div className="flex md:flex-col flex-row md:w-1/4 w-1/2">
                        <span className="text-start">Сума:</span>
                        <span className="font-bold ">
                            <Price price={data.totalPrice} />
                        </span>
                    </div>
                </div>
            }
        >
            <>
                <div> {list}</div>
                <div className="flex justify-between md:flex-row flex-col  gap-[15px] ">
                    <div className="flex flex-col md:gap-[20px] gap-[15px]">
                        <div className="flex gap-1">
                            Імя фамілія:
                            <span className="font-extralight">
                                {data.firstName}
                            </span>
                        </div>
                        <div className="flex gap-1">
                            Дата:
                            <span className="font-extralight">
                                {new Date(data.createdAt).toLocaleString("ua", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-[20px] gap-[15px]">
                        <div className="flex gap-1">
                            E-Mail:
                            <span className="font-extralight">
                                {data.email}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-[20px] gap-[15px]">
                        <div className="flex gap-1">
                            Номер телефона:
                            <span className="font-extralight">
                                {data.phone}
                            </span>
                        </div>
                        <div className="flex gap-1">
                            Спосіб оплати:
                            <span className="font-extralight">карта</span>
                        </div>
                    </div>
                </div>
            </>
        </SelectList>
    );
};

export default CardList;
