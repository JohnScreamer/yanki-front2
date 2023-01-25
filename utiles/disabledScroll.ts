export const disabledScroll = (): (() => void) => {
    if (document.body.clientWidth < 768) {
        document.body.style.cssText = `
        height: 100vh;
        overflow-y: hidden;`;
    }

    return () => {
        document.body.style.cssText = ` `;
    };
};
