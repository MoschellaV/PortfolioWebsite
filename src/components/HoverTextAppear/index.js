import React, { useState } from "react";
import { useTheme } from "@mui/material";

const HoverTextAppear = ({ children, newText }) => {
    const theme = useTheme();

    const [showHiddenText, setShowHiddenText] = useState(false);

    const showHiddenTextHandler = () => {
        setShowHiddenText(true);
    };

    const hideHiddenTextHandler = () => {
        setShowHiddenText(false);
    };

    const clickForHiddenTextHandler = () => {
        setShowHiddenText(!showHiddenText);
    };

    const renderAdditionalText = () => {
        if (showHiddenText) {
            return <span> {newText}</span>;
        }
        return null;
    };

    return (
        <>
            <span
                onMouseEnter={showHiddenTextHandler}
                onClick={clickForHiddenTextHandler}
                // onMouseLeave={hideHiddenTextHandler}
                style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    textDecorationThickness: 1.5,
                }}
            >
                {children}
            </span>
            <span style={{ opacity: 0.7, color: theme.palette.orange.bright }}>{renderAdditionalText()}</span>
        </>
    );
};
export default HoverTextAppear;
