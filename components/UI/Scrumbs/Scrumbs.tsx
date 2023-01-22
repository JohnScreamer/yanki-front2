import { Breadcrumbs } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

type ScrumbsType = {
    arrName: Array<string>;
};

const Scrumbs: FC<ScrumbsType> = ({ arrName }) => {
    const router = useRouter();
    const arr = router.pathname.split("/");

    const joinUrl = (i: number) => {
        if (!i) {
            return "/";
        }
        return arr.slice(0, i + 1).join("/");
    };
    return (
        <>
            <nav className="mb-4">
                <ul className="flex">
                    {arr.map((el, i) => {
                        if (i + 1 === arr.length) {
                            return (
                                <li
                                    className="flex items-center font-semibold"
                                    key={arrName[i]}
                                >
                                    <span className="inline-block mr-1">
                                        {arrName[i]}
                                    </span>
                                </li>
                            );
                        }

                        return (
                            <li
                                className="flex items-center hover:underline"
                                key={arrName[i]}
                            >
                                <span className="inline-block mr-1">
                                    <Link href={joinUrl(i)}>{arrName[i]}</Link>
                                </span>

                                <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 14 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.88186 12.1334L0.0666504 3.31817L2.58477 0.800049L13.9181 12.1334L2.58477 23.4667L0.0666504 20.9486L8.88186 12.1334Z"
                                        fill="#bcbcbc"
                                    />
                                </svg>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Scrumbs;
