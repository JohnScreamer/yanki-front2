import { FC, ReactNode, useRef } from "react";
import { useAppSelector } from "../../../Hooks/common";
import { getBurgerStatus } from "../../../utiles/selectors/coomonSelectors";
import BackgroundMainImg from "./BackgroundMainImg";
import MainBanner from "./MainBanner";
type MainHeaderWrapperType = {
    children: ReactNode;
};

const MainHeaderWrapper: FC<MainHeaderWrapperType> = ({ children }) => {
    const refWindow = useRef(null);
    const isBurgerActive = useAppSelector(getBurgerStatus);
    return (
        <div ref={refWindow} className="h-screen top-0   sticky ">
            <div className="z-10 relative bg-prime50-light     shadow-black">
                {children}
                <div
                    className={`absolute top-0 left-0 min-w-full min-h-full  backdrop-blur-md md:bg-transparent ${
                        isBurgerActive ? "bg-accent2-light" : ""
                    }  z-0`}
                ></div>
            </div>
            <BackgroundMainImg refWindow={refWindow} />
            <MainBanner refWindow={refWindow} />
        </div>
    );
};

export default MainHeaderWrapper;
