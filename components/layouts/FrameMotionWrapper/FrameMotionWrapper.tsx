import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { FC } from "react";
import { useIsMain } from "../../../Hooks/useIsMain";

type FrameMotionWrapperType = {
    children: React.ReactNode;
};

const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { y: 20, filter: "blur(10px)" },
    animate: { y: 0, filter: "blur(0px)" },
    exit: { y: -20, filter: "blur(10px)" },
};
const FrameMotionWrapper: FC<FrameMotionWrapperType> = ({ children }) => {
    const isMain = useIsMain();
    const route = useRouter();
    const animation = isMain ? {} : AnimationSettings;
    return (
        <div
            className={`min-h-[100%] grow h-full bg-white dark:bg-main-dark ${
                isMain ? "bg-main-dark" : "bg-white"
            }`}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    className="min-h-[100%] h-full"
                    key={route.route}
                    color="red"
                    {...animation}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default FrameMotionWrapper;
