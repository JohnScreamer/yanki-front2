import { FC, useEffect, useState } from "react";
import { ErrorData } from "../../Types/CommentType";
import PopUp from "./PopUp";
type ShowErrorType = {
    error: any;
    isError: boolean;
};

const ShowError: FC<ShowErrorType> = ({ error, isError }) => {
    let message = "";
    if (error?.data) {
        message = error.data.message;
    }

    const [isVisible, setStatus] = useState(isError);
    useEffect(() => {
        setStatus(isError);
    }, [isError]);

    if (message) {
        return (
            <PopUp
                text={message}
                isVisible={isVisible}
                setVisibleStatus={setStatus}
                alertType="error"
            />
        );
    }

    return null;
};

export default ShowError;
