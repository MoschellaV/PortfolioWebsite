import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const HMChip = () => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    const handleClose = (e) => {
        e.stopPropagation();
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: "10px",
                right: "10px",
                zIndex: 1000,
            }}
        >
            <Link href="/cv" passHref legacyBehavior>
                <Box
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 4,
                        border: `3px solid ${theme.palette.orange.bright}`,
                        display: "flex",
                        alignItems: "center",
                        p: 1.2,
                        cursor: "pointer",
                        transition: "transform 0.3s ease-in-out",
                        "&:hover": {
                            transform: "scale(1.03)", // Slightly grow the component
                        },
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Image src="images/hiring-icon.svg" width={30} height={30} alt=" " draggable={false} />
                    <Box sx={{ display: "flex", flexDirection: "column", ml: 1 }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography
                                variant="p"
                                component="p"
                                sx={{ fontSize: 13, color: theme.palette.secondary.main }}
                            >
                                Hiring Manager?
                            </Typography>
                            {(isHovered || isSmall) && (
                                <CloseIcon
                                    color="secondary"
                                    sx={{ fontSize: 18, cursor: "pointer", ml: 1 }}
                                    onClick={handleClose}
                                />
                            )}
                        </Box>
                        <Typography
                            variant="p"
                            component="p"
                            sx={{ fontSize: 11, color: theme.palette.secondary.main }}
                        >
                            Click here to see my CV
                        </Typography>
                    </Box>
                </Box>
            </Link>
        </Box>
    );
};

export default HMChip;
