import React, { useState } from "react";
import Image from "next/image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, IconButton, useTheme } from "@mui/material";

const Carousel = () => {
    const theme = useTheme();
    const [picIndex, setPicIndex] = useState(0);

    const pics = [
        {
            label: "1",
            url: "/images/aboutImage1.png",
        },
        {
            label: "2",
            url: "/images/aboutImage2.png",
        },
        {
            label: "3",
            url: "/images/aboutImage3.png",
        },
    ];

    const previousPic = () => {
        if (picIndex === 0) setPicIndex(2);
        else setPicIndex((prevPicIndex) => prevPicIndex - 1);
    };

    const nextPic = () => {
        if (picIndex === 2) setPicIndex(0);
        else setPicIndex((prevPicIndex) => prevPicIndex + 1);
    };

    return (
        <>
            <Box sx={{ position: "relative", minHeight: "100vh", mr: 5, mt: 5 }}>
                <Box
                    sx={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "space-between" }}
                >
                    <Box>
                        <IconButton
                            aria-label="previous"
                            color="black"
                            sx={{
                                ml: 1,
                                posiiton: "absolute",
                                zIndex: 10,
                                backgroundColor: theme.palette.secondary.main,
                                opacity: 0.6,
                                padding: 0.5,
                                "&:hover": { opacity: "0.4", backgroundColor: theme.palette.secondary.main },
                            }}
                            onClick={previousPic}
                        >
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton
                            aria-label="next"
                            color="black"
                            sx={{
                                mr: 1,
                                posiiton: "absolute",
                                zIndex: 10,
                                backgroundColor: theme.palette.secondary.main,
                                opacity: 0.6,
                                padding: 0.5,
                                "&:hover": { opacity: "0.4", backgroundColor: theme.palette.secondary.main },
                            }}
                            onClick={nextPic}
                        >
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </Box>
                    {/* </Box> */}
                </Box>
                <Image src={pics[picIndex].url} alt="linkedin icon" fill style={{ zIndex: 1 }} />
            </Box>
        </>
    );
};

export default Carousel;
