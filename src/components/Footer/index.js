import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 12, mb: 3 }}>
            <Typography component="p" variant="p">
                {currYear} © Vince Moschella
            </Typography>
        </Box>
    );
};

export default Footer;
