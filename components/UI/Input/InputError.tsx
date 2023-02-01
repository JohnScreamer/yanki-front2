import { FC } from "react";

type InputErrorType = { error: string };

const InputError: FC<InputErrorType> = ({ error }) => {
    return <span className="text-red-600 absolute text-sm  ">{error}</span>;
};

export default InputError;
