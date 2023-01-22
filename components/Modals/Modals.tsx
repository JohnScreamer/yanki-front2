import { useRouter } from "next/router";
import { FC } from "react";
import ModalLayout from "../layouts/ModalLayout/ModalLayout";
import Authorization from "./Authorization/Authorization";
import OrderDone from "./OrderDone/OrderDone";
import Registration from "./Registration/Registration";
import RegistrationDone from "./RegistrationDone/RegistrationDone";
import ResetPass from "./ResetPass/ResetPass";

type ModalsType = {};

const Modals: FC<ModalsType> = () => {
    const router = useRouter();
    const {
        registration,
        resetPass,
        authorization,
        registrationDone,
        orderDone,
    } = router.query;
    const clearGetParam = (param: string) => {
        const newQuery = router.query;
        delete newQuery[param];
        router.replace({ query: { ...newQuery } });
    };
    return (
        <>
            {registration ? (
                <ModalLayout onClose={() => clearGetParam("registration")}>
                    <Registration />
                </ModalLayout>
            ) : null}
            {resetPass ? (
                <ModalLayout onClose={() => clearGetParam("resetPass")}>
                    <ResetPass />
                </ModalLayout>
            ) : null}
            {authorization ? (
                <ModalLayout onClose={() => clearGetParam("authorization")}>
                    <Authorization />
                </ModalLayout>
            ) : null}
            {registrationDone ? (
                <ModalLayout onClose={() => clearGetParam("registrationDone")}>
                    <RegistrationDone />
                </ModalLayout>
            ) : null}
            {orderDone ? (
                <ModalLayout onClose={() => clearGetParam("orderDone")}>
                    <OrderDone />
                </ModalLayout>
            ) : null}
        </>
    );
};

export default Modals;
