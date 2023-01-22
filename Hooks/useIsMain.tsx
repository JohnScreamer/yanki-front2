import { useRouter } from "next/router";

export const useIsMain = () => {
    const routh = useRouter();

    return routh.pathname === "/";
};
