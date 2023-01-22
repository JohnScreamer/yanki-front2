import { setFavorite, setProfile } from "../Redux/Slice/Profile";
import { AppDispatch } from "../Redux/store";
import Cookies from "js-cookie";

export const auth = async (dispatch: AppDispatch) => {
    const token = Cookies.get("auth");

    // if (token) {
    //     const user = await authMe(token);
    //     dispatch(setProfile(user.data.data));
    //     const favorite = (await getUserFavorite(user.data.data._id)).data;
    //     dispatch(setFavorite(favorite.data.goods));
    // }
};
