import { FC, ReactNode, useEffect } from "react";
import { auth } from "../../common/auth";
import { useAppDispatch } from "../../Hooks/common";

type AuthWrapperType = {
    children: ReactNode;
};

const AuthWrapper: FC<AuthWrapperType> = ({ children }) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        auth(dispatch);
    }, []);
    return <>{children}</>;
};

export default AuthWrapper;
