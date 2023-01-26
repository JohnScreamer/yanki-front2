import { FC } from "react";
import Desktop from "../../UI/Burger/Desktop/Desktop";
import Mobile from "../../UI/Burger/Mobile/Mobile";

type BurgerWrapperType = {};

const BurgerWrapper: FC<BurgerWrapperType> = () => {
    return (
        <>
            <div className="absolute top-0 md:block  hidden left-0  w-full h-full z-30 ">
                <div className="  h-full w-full   backdrop-blur-md ">
                    <Desktop />
                </div>
            </div>
            <div className="md:hidden block h-screen  absolute z-10    w-full">
                <Mobile />
            </div>
        </>
    );
};

export default BurgerWrapper;
