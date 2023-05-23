import React, { useState } from "react";
import { useTheme } from "@mui/material";

const HoverTextAppear = ({ children, newText }) => {
    const theme = useTheme();

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const renderAdditionalText = () => {
        if (isHovered) {
            return <span> {newText}</span>;
        }
        return null;
    };

    return (
        <>
            <span
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
