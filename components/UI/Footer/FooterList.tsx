import Link from "next/link";
import { FC } from "react";
type ListItemType = {
    array: Array<{ value: string; url: string }>;
};
export const ListItem: FC<ListItemType> = ({ array }) => {
    return (
        <>
            {array.map((el) => (
                <Link href={el.url} key={el.value}>
                    <li className="cursor-pointer text-center">{el.value}</li>
                </Link>
            ))}
        </>
    );
};
