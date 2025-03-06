import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = ({ whiteFont = false, marginTop = 12 }) => {
    const currYear = new Date().getFullYear();

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: marginTop, mb: 3 }}>
            <Typography component="p" variant="p" sx={{ color: whiteFont && "#fff" }}>
                {currYear} © Vince Moschella
            </Typography>
        </Box>
    );
};

export default Footer;
