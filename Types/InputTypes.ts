export interface InputType {
    placeholder: string;
    value: string | number;
    fn: (str: string) => void;
    className?: string;
    padding?: boolean;
    passSVG?: boolean;
    error?: string;
    field?: any;

    type?: "text" | "password" | "number" | "email";
}
