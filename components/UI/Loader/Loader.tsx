import { FC } from "react";

type LoaderType = {};

const Loader: FC<LoaderType> = () => {
    return (
        <div className="fixed top-1/3 left-1/2 z-[1000]">
            <div className="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        margin: "auto",
                        background: "none",
                        display: "block",
                        shapeRendering: "auto",
                    }}
                    width="100px"
                    height="100px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                >
                    <g>
                        <circle cx="60" cy="50" r="4" fill="black">
                            <animate
                                attributeName="cx"
                                repeatCount="indefinite"
                                dur="0.8130081300813008s"
                                values="95;35"
                                keyTimes="0;1"
                                begin="-0.8241s"
                            ></animate>
                            <animate
                                attributeName="fill-opacity"
                                repeatCount="indefinite"
                                dur="0.8130081300813008s"
                                values="0;1;1"
                                keyTimes="0;0.2;1"
                                begin="-0.8241s"
                            ></animate>
                        </circle>
                        <circle cx="60" cy="50" r="4" fill="black">
                            <animate
                                attributeName="cx"
                                repeatCount="indefinite"
                                dur="0.8130081300813008s"
                                values="95;35"
                                keyTimes="0;1"
                                begin="-0.40590000000000004s"
                            ></animate>
                            <animate
                                attributeName="fill-opacity"
                                repeatCount="indefinite"
                                dur="0.8130081300813008s"
                                values="0;1;1"
                                keyTimes="0;0.2;1"
                                begin="-0.40590000000000004s"
                            ></animate>
                        </circle>
                        <circle cx="60" cy="50" r="4" fill="black">
                            <animate
                                attributeName="cx"
                                repeatCount="indefinite"
                                dur="0.8130081300813008s"
                                values="95;35"
                                keyTimes="0;1"
                                begin="0s"
                            ></animate>
                            <animate
                                attributeName="fill-opacity"
                                repeatCount="indefinite"
                                dur="0.8130081300813008s"
                                values="0;1;1"
                                keyTimes="0;0.2;1"
                                begin="0s"
                            ></animate>
                        </circle>
                    </g>
                    <g transform="translate(-15 0)">
                        <path
                            d="M50 50L20 50A30 30 0 0 0 80 50Z"
                            fill="yellow"
                            transform="rotate(90 50 50)"
                        ></path>
                        <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="yellow">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                repeatCount="indefinite"
                                dur="0.8130081300813008s"
                                values="0 50 50;45 50 50;0 50 50"
                                keyTimes="0;0.5;1"
                            ></animateTransform>
                        </path>
                        <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="yellow">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                repeatCount="indefinite"
                                dur="0.8130081300813008s"
                                values="0 50 50;-45 50 50;0 50 50"
                                keyTimes="0;0.5;1"
                            ></animateTransform>
                        </path>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Loader;
