import { AllFiltersType } from "../pages/catalog";

export function isPropNull<T extends AllFiltersType>(obj: T) {
    type keys = keyof T;
    const rez = {} as any;
    (Object.keys(obj) as Array<keys>).forEach((el) => {
        if (obj[el]) {
            rez[el] = obj[el];
        }
    });
    return rez as T;
}
