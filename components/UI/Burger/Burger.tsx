import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../Hooks/common";
import { useIsMain } from "../../../Hooks/useIsMain";
import { setBurgerStatus } from "../../../Redux/Slice/Common";
import { getBurgerStatus } from "../../../utiles/selectors/coomonSelectors";
import s from "./Burger.module.scss";
type BurgerType = {};

const Burger: FC<BurgerType> = () => {
    const toggleBurger = () => {};
    // const [isActive, setStatus] = useState(false);
    const isBurgerActive = useAppSelector(getBurgerStatus);
    const dispatch = useAppDispatch();
    const toggleBurgerStatus = () => {
        dispatch(setBurgerStatus(!isBurgerActive));
    };

    const isMain = useIsMain();
    return (
        <>
            {isBurgerActive ? (
                <button
                    className="relative cursor-pointer  mr-4 "
                    onClick={toggleBurgerStatus}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        id={s.close}
                    >
                        <g clipPath="url(#clip0_344_430)">
                            <path
                                d="M12.5 9.72267L22.2227 1.52588e-05L25 2.77736L15.2773 12.5L25 22.2227L22.2227 25L12.5 15.2774L2.77734 25L0 22.2227L9.72266 12.5L0 2.77736L2.77734 1.52588e-05L12.5 9.72267Z"
                                fill={isMain ? "#ffff" : "#E0BEA2"}
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_344_430">
                                <rect width="25" height="25" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            ) : (
                <button className={s.btn} onClick={toggleBurgerStatus}>
                    <span
                        className={`w-[34px] mb-[6px] h-[4px] block  ${
                            isMain ? "bg-white" : "bg-accent-light"
                        }`}
                    ></span>
                    <span
                        className={`w-[26px] mb-[6px] h-[4px] block  ${
                            isMain ? "bg-white" : "bg-accent-light"
                        }`}
                    ></span>
                    <span
                        className={`w-[16px] mb-[6px] h-[4px] block  ${
                            isMain ? "bg-white" : "bg-accent-light"
                        }`}
                    ></span>
                </button>
            )}
        </>
    );
};

export default Burger;
