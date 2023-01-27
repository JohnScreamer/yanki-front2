import { Dispatch, FC, SetStateAction, useRef } from "react";
import { api } from "../../../service/axiosApiRequest/api";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";

type EditAvatarType = {
    setAvatar: Dispatch<SetStateAction<string>>;
};

const EditAvatar: FC<EditAvatarType> = ({ setAvatar }) => {
    const refInput = useRef<HTMLInputElement>(null);
    const toggleWindow = () => {
        if (refInput.current) {
            refInput.current.click();
        }
    };

    const setAva = async () => {
        try {
            const file = refInput?.current?.files;
            if (file) {
                const formData = new FormData();
                formData.append("image", Array.from(file)[0]);
                const { data } = await api().apiReq.setNewAvatar(formData);
                console.log(data?.uploads);
                setAvatar(data?.uploads);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <input
                type="file"
                ref={refInput}
                onChange={setAva}
                className="hidden"
            />
            <DefaultBtn fn={toggleWindow}>Добавити картинку</DefaultBtn>
        </>
    );
};

export default EditAvatar;
