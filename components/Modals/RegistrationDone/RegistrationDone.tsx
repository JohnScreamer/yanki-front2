import { FC } from "react";

type RegistrationDoneType = {};

const RegistrationDone: FC<RegistrationDoneType> = () => {
    return (
        <div className="flex flex-col gap-[30px] justify-center mx-[50px] max-[768px]:mx-0  w-[400px] max-[768px]:w-full ">
            <h3 className="text-center text-xl">Регістрація пройшла умпішно</h3>

            <p>Ви успішно зареєструвалися!Успішних вам покупок!</p>
        </div>
    );
};

export default RegistrationDone;
