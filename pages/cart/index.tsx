import { FC } from "react";
import Card from "../../components/Cart/Card/Card";
import Order from "../../components/Cart/Order/Order";
import Scrumbs from "../../components/UI/Scrumbs/Scrumbs";
import { useAppSelector } from "../../Hooks/common";
import Price from "../../utiles/currency/Currency";
const urlName = ["Головна", "Корзина"];
type CartType = {};
const Cart: FC<CartType> = () => {
    const cartItems = useAppSelector((state) => state.cart.cart);
    const cartList = cartItems.map((el) => <Card key={el._id} game={el} />);
    const totalPrice = useAppSelector((state) => state.cart.totalPrice);

    return (
        <div className="Container mx-auto">
            <Scrumbs arrName={urlName} />
            <ul className="md:mb-[30px] mb-[15px] font-">{cartList}</ul>
            <div>
                <div className="gap-3 flex justify-end">
                    <span>До оплати:</span> <Price price={totalPrice} />
                </div>
            </div>
            <Order />
        </div>
    );
};

export default Cart;
