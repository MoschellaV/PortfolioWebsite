import React from "react";
import { Box, useTheme, Typography } from "@mui/material";

const Header = () => {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Typography variant="CVHeader" sx={{ mb: 0.7 }}>
                    My Resume
                    <span style={{ fontSize: 14 }}>
                        <em> so far...</em>
                    </span>
                </Typography>
            </Box>
            <Typography variant="CVSmallText" sx={{ opacity: 0.5 }}>
                updated March 4th 2025
            </Typography>
        </>
    );
};

export default Header;
