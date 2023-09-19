import React from "react";
import { Box } from "@mui/material";

export default function SpacingWrapper({ children }) {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ width: { xs: "95vw", md: 1300 }, my: 8, mb: 30 }}>{children}</Box>
        </Box>
    );
}
