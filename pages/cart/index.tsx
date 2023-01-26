import { FC } from "react";
import Card from "../../components/Cart/Card/Card";
import Order from "../../components/Cart/Order/Order";
import HeadLayout from "../../components/layouts/HeadLayout";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
import { useAppSelector } from "../../Hooks/common";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Price from "../../utiles/currency/Currency";
import {
    getCartSelector,
    getTotalPriceSelector,
} from "../../utiles/selectors/cartSelectors";
const urlName = ["Головна", "Корзина"];
type CartType = {};
const Cart: FC<CartType> = () => {
    const cartItems = useAppSelector(getCartSelector);
    const cartList = cartItems.map((el) => <Card key={el._id} game={el} />);
    const totalPrice = useAppSelector(getTotalPriceSelector);

    return (
        <HeadLayout name="Корзина">
            <div className="Container mx-auto pb-[50px]">
                <Scrumbs arrName={urlName} />
                {cartItems.length ? (
                    <ul className="md:mb-[30px] mb-[15px] font-">{cartList}</ul>
                ) : (
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text center">Корзина пуста!</h2>
                        <RemoveShoppingCartIcon className="h-[200px] w-[200px]" />
                    </div>
                )}

                <div>
                    <div className="gap-3 flex justify-end">
                        <span>До оплати:</span> <Price price={totalPrice} />
                    </div>
                </div>
                <Order />
            </div>
        </HeadLayout>
    );
};

export default Cart;
