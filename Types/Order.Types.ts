import { Game } from "./gameType";
export interface NewOrderTypes {
    status: "ok";
    message: "Order created";
    newData: NewOrderType;
}

export type NewOrderType = {
    user: string;
    goods: Array<Game>;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    postAddresses: string;

    isDelivered?: boolean;
    totalPrice: number;
    totalAmount: number;
};

export type OrderList = {
    city: string;
    createdAt: string;
    email: string;
    firstName: string;
    goods: Array<Game>;
    isDelivered: boolean;
    lastName: string;
    phone: string;
    postAddresses: string;
    totalAmount: number;
    totalPrice: number;
    updatedAt: string;
    user: string;
    _id: string;
};
export type OrderListResponse = {
    status: string;
    data: Array<OrderList>;
};
