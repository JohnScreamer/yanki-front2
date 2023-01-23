import { FC } from "react";
import EditPersonalInfo from "../../components/Cabinet/EditPersonalInfo/EditPersonalInfo";
import Nav from "../../components/Cabinet/Nav/Nav";
import HeadLayout from "../../components/layouts/HeadLayout";

type PersonalCabinetType = {};

const personalCabinet: FC<PersonalCabinetType> = () => {
    return (
        <HeadLayout name="Особистий кабінет">
            <Nav />
            <EditPersonalInfo />
        </HeadLayout>
    );
};

export default personalCabinet;
