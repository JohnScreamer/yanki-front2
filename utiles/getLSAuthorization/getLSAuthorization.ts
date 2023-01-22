export const getLSAuthorization = () => {
    return localStorage.getItem("authorization")
        ? (localStorage.getItem("authorization") as string)
        : undefined;
};
