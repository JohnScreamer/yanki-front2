import { useRouter } from "next/router";

export const useRouteTo = () => {
    const router = useRouter();

    return (deleteArr: Array<string> | null, to: string | null) => {
        if (!to) {
            return () => {
                const newRoute = router.query;
                if (deleteArr) {
                    deleteArr.forEach((el) => delete newRoute[el]);
                }

                router.push({ query: { ...newRoute } }, undefined, {
                    shallow: true,
                });
            };
        }

        return () => {
            const newRoute = router.query;
            if (deleteArr) {
                deleteArr.forEach((el) => delete newRoute[el]);
            }

            router.push({ query: { ...newRoute, [to]: true } }, undefined, {
                shallow: true,
            });
        };
    };
};
