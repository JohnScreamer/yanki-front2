// const defFilter: AllFiltersType = {
//     "price[gte]": 1,
//     "price[lte]": 2,
//     name: null,
//     order: undefined,
//     page: undefined,
//     platform: undefined,
//     publisher: undefined,
//     sort: undefined,

import { AllFiltersType } from "../Types/catalogTypes";

// };
export function isPropNull<T extends AllFiltersType>(obj: T) {
    type keys = keyof T;

    const rez = {} as any;
    (Object.keys(obj) as Array<keys>).forEach((el) => {
        // if (!hasInObject(el)) {
        //     return;
        // }
        if (obj[el]) {
            rez[el] = obj[el];
        }
    });
    return rez as T;
}
// const hasInObject = (key: string | number | symbol): boolean => {
//     if (key in defFilter) {
//         return true;
//     }
//     return false;
// };
