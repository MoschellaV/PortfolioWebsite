import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";

import { Error404Model, Footer } from "@/components";

const Custom404 = () => {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ height: "70vh" }}>
                <Error404Model />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h3" component="h2">
                        You're lost bud.
                    </Typography>
                    <Button
                        href="https://www.vincemoschella.com/"
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.secondary.main,
                            "&:hover": {
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.primary.main,
                            },
                            borderRadius: "0",
                            padding: "0.5rem 1rem",
                            textTransform: "none",
                        }}
                    >
                        Back Home
                    </Button>
                    <Footer />
                </Box>
            </Box>
        </>
    );
};

export default Custom404;
