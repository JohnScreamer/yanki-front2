import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { BASE_URL } from "../../../common/url";
import { CommentType } from "../../../Types/CommentType";
import noPhoto from "./../../../public/img/photo.png";
type AvatarType = {
    comment: CommentType;
};

const Avatar: FC<AvatarType> = ({ comment }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        setTime(
            new Date(comment.createdAt).toLocaleString("ua", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })
        );
    }, [comment.createdAt]);
    return (
        <div className="flex  border-accent-light dark:border-accent75-dark- border-b-[1px] items-center p-1 ">
            <div className="relative w-11 h-10 mr-4 rounded-full overflow-hidden">
                {comment?.user?.avatar ? (
                    <Image
                        layout="fill"
                        alt="аватар"
                        objectFit="cover"
                        src={BASE_URL + comment.user.avatar}
                    />
                ) : (
                    <Image
                        layout="fill"
                        alt="аватар"
                        objectFit="cover"
                        src={noPhoto}
                    />
                )}
            </div>

            <div className="mr-auto text-lg font-medium">
                {comment.user?.username}
            </div>
            <div className="text-sm ">{time}</div>
        </div>
    );
};

export default Avatar;
