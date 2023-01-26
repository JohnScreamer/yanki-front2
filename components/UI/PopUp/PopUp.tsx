import { FC, useEffect, useState } from "react";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import { Alert, Slide } from "@mui/material";
type PopUpType = {
    isVisible: boolean;
    setVisibleStatus: (status: boolean) => void;
    text: string;
    alertType: "error" | "warning" | "info" | "success";
};

const PopUp: FC<PopUpType> = ({
    alertType,
    isVisible,
    setVisibleStatus,
    text,
}) => {
    useEffect(() => {
        const timeoutReset = setTimeout(() => setVisibleStatus(false), 3000);
        return () => clearTimeout(timeoutReset);
    }, []);
    return (
        <div className="fixed bottom-[50px] right-[50px]">
            <Slide direction="up" in={isVisible} mountOnEnter unmountOnExit>
                <Alert
                    onClose={() => setVisibleStatus(false)}
                    severity={alertType}
                >
                    {text}
                </Alert>
            </Slide>
        </div>
    );
};

export default PopUp;
