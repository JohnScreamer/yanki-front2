import { FC } from "react";
import {
    PARAGRAPH_ONE,
    PARAGRAPH_TWO,
    PARAGRAPH_THREE,
    PARAGRAPH_FOUR,
} from "../../common/constants/about";

type AboutWrapperType = {};

const AboutWrapper: FC<AboutWrapperType> = () => {
    return (
        <article className="flex flex-col gap-[10px]">
            <h1 className="text-xl my-[20px]">Про нас</h1>
            <p>{PARAGRAPH_ONE}</p>
            <p>{PARAGRAPH_TWO}</p>
            <p>{PARAGRAPH_THREE}</p>
            <p className="border-b-[0.3px] pb-2 border-accent-light">
                {PARAGRAPH_FOUR}
            </p>
        </article>
    );
};

export default AboutWrapper;
