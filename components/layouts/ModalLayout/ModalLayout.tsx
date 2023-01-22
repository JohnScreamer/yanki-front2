import { Padding } from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";
import { FC, ReactNode, useEffect } from "react";

type ModalLayoutType = {
    onClose: (status: boolean) => void;
    children: ReactNode;
};

const ModalLayout: FC<ModalLayoutType> = ({ onClose, children }) => {
    const handlerCloseModal = () => {
        onClose(false);
    };

    return (
        <div
            className={`fixed z-[1000] bg-prime50-light top-0 left-0 w-screen h-screen flex px-[15px] max-[768px]:pr-[32px] justify-center items-center `}
        >
            <ClickAwayListener onClickAway={handlerCloseModal}>
                <div className=" bg-white dark:bg-main2-dark  md:p-[50px] p-[20px] relative">
                    {children}
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-[20px] right-[20px] md:w-[25px] w-[15px]  hover:fill-black dark:hover:fill-accentActive-dark cursor-pointer"
                        onClick={handlerCloseModal}
                        fill="#E0BEA2"
                    >
                        <g clipPath="url(#clip0_344_430)">
                            <path d="M12.5 9.72267L22.2227 1.52588e-05L25 2.77736L15.2773 12.5L25 22.2227L22.2227 25L12.5 15.2774L2.77734 25L0 22.2227L9.72266 12.5L0 2.77736L2.77734 1.52588e-05L12.5 9.72267Z" />
                        </g>
                        <defs>
                            <clipPath id="clip0_344_430">
                                <rect width="25" height="25" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </ClickAwayListener>
        </div>
    );
};

export default ModalLayout;
