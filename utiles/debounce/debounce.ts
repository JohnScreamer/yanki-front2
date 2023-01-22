export const customDebounce = (fn: (obj: object) => void) => {
    let timeOut: undefined | ReturnType<typeof setTimeout>;
    return (args: object) => {
        clearTimeout(timeOut);

        timeOut = setTimeout(() => {
            fn.call(this, args);
        }, 400);
    };
};
