import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import { BASE_URL } from "../../../../common/url";
import EditAvatar from "../EditAvatar";
import noAva from "./../../../../public/img/photo.png";
type AvatarType = {
    setAvatar: Dispatch<SetStateAction<string>>;
    avatar?: string;
};

const Avatar: FC<AvatarType> = ({ avatar, setAvatar }) => {
    return (
        <div className="flex justify-center flex-col items-center gap-3">
            <div className="h-[150px] w-[150px] relative rounded-full overflow-hidden">
                {avatar ? (
                    <Image
                        src={BASE_URL + avatar}
                        objectFit="cover"
                        layout="fill"
                    />
                ) : (
                    <Image src={noAva} objectFit="cover" layout="fill" />
                )}
            </div>

            <EditAvatar setAvatar={setAvatar} />
        </div>
    );
};

export default Avatar;
