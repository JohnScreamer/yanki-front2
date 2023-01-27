import { useRouter } from "next/router";
import { FC } from "react";
import EditPersonalInfo from "../../components/Cabinet/EditPersonalInfo/EditPersonalInfo";
import Nav from "../../components/Cabinet/Nav/Nav";
import HeadLayout from "../../components/layouts/HeadLayout";
import RedirectPage from "../../components/UI/RedirectPage/RedirectPage";
import { useAppSelector } from "../../Hooks/common";
import { getIsAuthSelector } from "../../utiles/selectors/profileSelectors";

type PersonalCabinetType = {};

const personalCabinet: FC<PersonalCabinetType> = () => {
    const route = useRouter();
    const isAuth = useAppSelector(getIsAuthSelector);
    const isWindow = typeof window === "undefined" ? false : true;
    if (!isAuth) {
        isWindow && route.push("/");
        return <RedirectPage />;
    }

    return (
        <HeadLayout name="Особистий кабінет">
            <div className="Container pb-[50px]">
                <Nav />
                <EditPersonalInfo />
            </div>
        </HeadLayout>
    );
};

export default personalCabinet;
