export type AllFiltersType = {
    page?: number;
    sort?: string;
    name?: string | null;
    order?: string;
    ["price[gte]"]?: number;
    ["price[lte]"]?: number;
    platform?: string;
    publisher?: string;
};
