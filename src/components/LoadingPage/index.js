import React from "react";
import { CircularProgress, useTheme } from "@mui/material/";
import Box from "@mui/material/Box";

export default function LoadingPage({ startFadeOut }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.primary.main,
                zIndex: 10000,
                opacity: startFadeOut ? 0 : 1,
                transition: "opacity 4s ease-out",
            }}
        >
            <CircularProgress sx={{ color: theme.palette.orange.main, opacity: startFadeOut ? 0 : 1 }} />
        </Box>
    );
}
