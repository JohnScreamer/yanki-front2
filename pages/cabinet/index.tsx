import { FC } from "react";
import EditPersonalInfo from "../../components/Cabinet/EditPersonalInfo/EditPersonalInfo";
import Nav from "../../components/Cabinet/Nav/Nav";

type PersonalCabinetType = {};

const personalCabinet: FC<PersonalCabinetType> = () => {
    return (
        <>
            <Nav />
            <EditPersonalInfo />
        </>
    );
};

export default personalCabinet;
