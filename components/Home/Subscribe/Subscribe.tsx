import { FC, useState } from "react";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import Input from "../../UI/Input/Input";

type SubscribeType = {};

const Subscribe: FC<SubscribeType> = () => {
    const [mail, setMail] = useState("");
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
                    className="mb-4 w-full"
                />
                <DefaultBtn className="w-full mb-4" fn={() => {}}>
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
