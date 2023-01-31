import { FC, useState } from "react";
import toast from "react-hot-toast";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import Input from "../../UI/Input/Input";

type SubscribeType = {};

const Subscribe: FC<SubscribeType> = () => {
    const [mail, setMail] = useState("");
    const handlerSubscribe = () => {
        if (mail.length > 5) {
            setMail("");
            return toast.success("Успішно підписалися на новини");
        }
        toast.error("Закороткий емейл");
    };
    return (
        <div className="Container center pb-[100px]">
            <div className=" max-w-[600px]  flex-col ">
                <h2 className="sm:text-4xl text-center text-2xl sm:mb-[50px] mb-[30px]">
                    Дізнайся першим про новинки
                </h2>
                <Input
                    fn={setMail}
                    placeholder={"Ваш e-mail*"}
                    value={mail}
                    type="email"
                    className="mb-4 w-full"
                />
                <DefaultBtn className="w-full mb-4" fn={handlerSubscribe}>
                    Підписатися
                </DefaultBtn>
                <div className="text-center sm:text-base text-sm">
                    Натискаючи на кнопку «Підписатися», я погоджуюсь на обробку
                    моїх персональних даних та ознайомлений(а) з умовами.
                </div>
                <span></span>
            </div>
        </div>
    );
};

export default Subscribe;
