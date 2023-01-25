import { useRouter } from "next/router";
import { useAppDispatch } from "./common";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { clearProfile } from "../Redux/Slice/Profile";
export const useLogOut = (): (() => void) => {
    const route = useRouter();
    const dispatch = useAppDispatch();
    return () => {
        dispatch(clearProfile());
        Cookies.remove("auth");
        route.push("/");
        toast(`До зустрічі.`, {
            icon: "👏",
        });
    };
};
