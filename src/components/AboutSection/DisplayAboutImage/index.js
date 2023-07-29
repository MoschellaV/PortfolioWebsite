import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const DisplayAboutImage = () => {
    const pic = {
        label: "1",
        url: "/images/aboutImages/aboutImage1.png",
        altText: "alt text here",
    };

    return (
        <Box
            sx={{
                position: "relative",
                minHeight: { xs: "50vh", sm: "75vh", md: "100vh" },
                mr: 5,
                mt: 5,
                mb: 5,
                ml: { xs: 5, md: 0 },
            }}
        >
            <Image src={pic.url} alt={pic.altText} fill style={{ zIndex: 1 }} draggable={false} />
        </Box>
    );
};

export default DisplayAboutImage;
