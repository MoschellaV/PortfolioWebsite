import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

const JobItem = ({ job, isHovered, setHoverId }) => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            onMouseEnter={() => setHoverId(job.id)}
            onMouseLeave={() => setHoverId(null)}
            sx={{
                display: "flex",
                alignItems: "flex-start",
                transition: "all 0.5s ease-in-out",
            }}
        >
            <Box sx={{ pr: { xs: 1, sm: 2, md: 4 }, pt: { xs: 2, sm: 0 } }}>
                <Image
                    src={job.imageURL}
                    alt=""
                    width={!isSmall ? 80 : 40}
                    height={!isSmall ? 80 : 40}
                    draggable={false}
                />
            </Box>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", pb: 1, pt: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography variant="CVTitle">{job.company}</Typography>
                        <Typography variant="CVText">{job.role}</Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "column", textAlign: "end" }}>
                        <Typography variant="CVText" sx={{ fontWeight: 700 }}>
                            {job.duration}
                        </Typography>
                        <Typography variant="CVText">{job.location}</Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        maxHeight: isHovered ? "200px" : "0px",
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? "translateY(0)" : "translateY(-10px)",
                        overflow: "hidden",
                        transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", pl: 1 }}>
                        {job.bulletPoints.map((item, index) => (
                            <Box key={index} sx={{ display: "flex" }}>
                                <Typography key={index} variant="CVText" sx={{ pr: 1 }}>
                                    {"•"}
                                </Typography>

                                <Typography key={index} variant="CVText">
                                    {item}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default JobItem;
