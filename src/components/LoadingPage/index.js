import React from "react";
import { Typography, useTheme } from "@mui/material/";
import Box from "@mui/material/Box";

export default function LoadingPage({ startFadeOut }) {
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                position: "fixed",
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
            <Box
                sx={{
                    opacity: startFadeOut ? 0 : 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100vh",
                    "--c": `linear-gradient(${theme.palette.orange.main} 0 0)`,
                    background: `
                        var(--c),
                        var(--c),
                        var(--c),
                        var(--c),
                        var(--c),
                        var(--c),
                        var(--c),
                        var(--c),
                        var(--c)
                        `,
                    backgroundSize: "16px 16px",
                    backgroundRepeat: "no-repeat",
                    animation: `
                        sh2-1 1s infinite,
                        sh2-2 1s infinite
                        `,
                    "@keyframes sh2-1": {
                        "0%, 100%": { width: "45px", height: "45px" },
                        "35%, 65%": { width: "65px", height: "65px" },
                    },
                    "@keyframes sh2-2": {
                        "0%, 40%": {
                            backgroundPosition:
                                "0 0, 0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 50% 50%",
                        },
                        "60%, 100%": {
                            backgroundPosition:
                                "0 50%, 0 100%, 50% 100%, 100% 100%, 100% 50%, 100% 0, 50% 0, 0 0, 50% 50%",
                        },
                    },
                }}
            ></Box>
            <Typography component="h3" variant="h4" sx={{ mt: 5, opacity: startFadeOut ? 0 : 1 }}>
                This might take a bit...
            </Typography>
        </Box>
    );
}
