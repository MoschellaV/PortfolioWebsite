import React, { useState } from "react";
import { Box, Typography, Chip, IconButton, useTheme, useMediaQuery } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import devpostIcon from "@/assets/icons/devpost-icon.png";

const Project = ({ projectData, projectIndex }) => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down("sm"));

    const mapChips = projectData.chips.map((chipContent, index) => {
        return (
            <Chip
                key={index}
                label={chipContent}
                sx={{
                    mr: 1,
                    mb: 1,
                    fontSize: { xs: 9, sm: 11 },
                    p: 0.5,
                }}
                variant="outlined"
                color="secondary"
                size="small"
            />
        );
    });

    const mapPoints = projectData.points.map((textContent, index) => {
        return (
            <Box key={index} sx={{ display: "flex" }}>
                <ControlPointIcon
                    color="secondary"
                    sx={{
                        mt: 0.5,
                        mr: 1,
                        mb: 0.4,
                        opacity: 0.7,
                        fontSize: { xs: 14, sm: 16 },
                    }}
                />
                <Typography
                    component="p"
                    variant="projectPoints"
                    sx={{
                        fontSize: { xs: 10, sm: 12 },
                    }}
                >
                    {textContent}
                </Typography>
            </Box>
        );
    });

    return (
        <>
            <Box
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    pb: 0,
                    borderWidth: {
                        xs: "5px 5px 5px 5px",
                        md: projectIndex % 2 ? "2px 5px 2px 2px" : "2px 2px 2px 5px",
                    },
                    borderColor: theme.palette.primary.main,
                    borderStyle: "solid",
                    color: theme.palette.primary.main,
                    backgroundColor: theme.palette.secondary.main,
                    transition: "background-color 0.3s ease, color 0.3s ease",
                    "&:hover": {
                        color: theme.palette.secondary.main,
                        backgroundColor: theme.palette.primary.main,
                    },
                }}
            >
                <Box
                    sx={{
                        height: 500,
                        position: "relative",
                        border: `4px solid ${theme.palette.primary.main}`,
                    }}
                >
                    {projectData.model}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            height: { xs: 330, sm: 280 },
                            overflow: "hidden",
                            backgroundColor: "blue",
                            background: `linear-gradient(transparent, transparent 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main})`,
                            backgroundSize: "100% 200%",
                            transition: "background 0.4s, opacity 0.4s",
                            backgroundPosition: isHovered && "100% 100%",
                            opacity: isHovered ? 1 : 0,
                            p: 1,
                        }}
                    >
                        <Box
                            sx={{
                                pt: 3,
                                transition: "opacity 0.35s ease-in-out",
                                opacity: isHovered ? 1 : 0,
                                transitionDelay: isHovered ? "0.1s" : "0s",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <IconButton
                                // size="small"
                                aria-label="ExpandLess"
                                color="secondary"
                                sx={{ position: "absolute", top: 10, right: 10, p: 0.2 }}
                                onClick={() => setIsHovered(false)}
                            >
                                <ExpandMoreIcon fontSize="large" />
                            </IconButton>
                            <Box>
                                <Box sx={{ pr: 1 }}>{mapChips}</Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        pt: 0.3,
                                        pb: 1,
                                    }}
                                >
                                    {mapPoints}
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                {projectData.githubLink && (
                                    <IconButton
                                        href={projectData.githubLink}
                                        target="_blank"
                                        aria-label="Github"
                                        color="secondary"
                                        sx={{ mr: 1, mb: 1 }}
                                    >
                                        <GitHubIcon sx={{ fontSize: { xs: 25, sm: 35 } }} />
                                    </IconButton>
                                )}
                                {projectData.devpostLink && (
                                    <IconButton
                                        href={projectData.devpostLink}
                                        target="_blank"
                                        aria-label={`Go to ${projectData.devpostLink}`}
                                        color="secondary"
                                        sx={{ mr: 1, mb: 1 }}
                                    >
                                        <Image
                                            src={devpostIcon}
                                            alt="devpost icon"
                                            width={isSmallBreakpoint ? 25 : 35}
                                            height={isSmallBreakpoint ? 25 : 35}
                                        />
                                    </IconButton>
                                )}
                                {projectData.externalLink && (
                                    <IconButton
                                        href={projectData.externalLink}
                                        target="_blank"
                                        aria-label={`Go to ${projectData.externalLink}`}
                                        color="secondary"
                                        sx={{ mr: 1, mb: 1 }}
                                    >
                                        <OpenInNewIcon sx={{ fontSize: { xs: 25, sm: 35 } }} />
                                    </IconButton>
                                )}
                            </Box>
                        </Box>
                    </Box>

                    {!isHovered && (
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                height: 40,
                                backgroundColor: theme.palette.primary.main,
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}
                        >
                            <Box sx={{ mt: 1, mr: 1 }}>
                                <IconButton
                                    aria-label="ExpandLess"
                                    color="secondary"
                                    onClick={() => setIsHovered(true)}
                                    sx={{ p: 0.2 }}
                                >
                                    <ExpandLessIcon fontSize="large" />
                                </IconButton>
                            </Box>
                        </Box>
                    )}
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="projectTitle" component="h4" sx={{ color: "inherit", fontSize: 20 }}>
                        {projectData.name}
                    </Typography>

                    <Typography
                        variant="projectTechnology"
                        component="p"
                        sx={{
                            fontSize: 14,
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            maxWidth: "50%",
                        }}
                    >
                        {projectData.technologies}
                    </Typography>
                </Box>
            </Box>
        </>
    );
};
export default Project;
