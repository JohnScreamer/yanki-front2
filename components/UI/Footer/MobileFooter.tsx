import { FC } from "react";
import { COMPANY, CUSTOMER, USEFUL } from "../../../common/constants/footerArr";
import Contacts from "../Contacts/Contacts";
import DropDown from "../Select&DropList/DropDown/DropDown";
import { ListItem } from "./FooterList";

type MobileFooterType = {};

const MobileFooter: FC<MobileFooterType> = () => {
    return (
        <div className="md:hidden block bg-white dark:bg-main-dark ">
            <DropDown defaultValue="Компанія" uppercase relative top={"0px"}>
                <ListItem array={COMPANY} />
            </DropDown>
            <DropDown defaultValue="Корисне" uppercase relative top={"0px"}>
                <ListItem array={USEFUL} />
            </DropDown>
            <DropDown defaultValue="Покупець" uppercase relative top={"0px"}>
                <ListItem array={CUSTOMER} />
            </DropDown>
            <div className="flex justify-center items-center flex-col w-full item-center pt-5">
                <Contacts />
            </div>
        </div>
    );
};

export default MobileFooter;
