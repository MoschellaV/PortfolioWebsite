import React, { useState } from "react";
import { Box, Typography, Chip, IconButton, useTheme } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Project = ({ projectData, projectIndex, numProjects }) => {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const mapChips = projectData.chips.map((chipContent, index) => {
        return (
            <Chip key={index} label={chipContent} sx={{ mr: 1, mb: 1, pt: 0.3 }} variant="outlined" color="secondary" />
        );
    });

    const mapPoints = projectData.points.map((textContent, index) => {
        return (
            <Box key={index} sx={{ display: "flex" }}>
                <ControlPointIcon color="secondary" sx={{ mt: 0.5, mr: 1, mb: 0.4, opacity: 0.7 }} />
                <Typography component="p" variant="projectPoints">
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
                <Box sx={{ height: "90vh", position: "relative", border: `4px solid ${theme.palette.primary.main}` }}>
                    {projectData.model}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            width: "100%",
                            height: { xs: "55vh", sm: "37vh" },
                            backgroundColor: "blue",
                            background: `linear-gradient(transparent, transparent 50%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.main})`,
                            backgroundSize: "100% 200%",
                            transition: "background 0.4s, opacity 0.4s",
                            backgroundPosition: isHovered && "100% 100%",
                            opacity: isHovered ? 1 : 0,
                        }}
                    >
                        <Box
                            sx={{
                                p: 3,
                                pl: 0,
                                pr: 0,
                                transition: "opacity 0.35s ease-in-out",
                                opacity: isHovered ? 1 : 0,
                                transitionDelay: isHovered ? "0.1s" : "0s",
                            }}
                        >
                            <IconButton
                                size="small"
                                aria-label="ExpandLess"
                                color="secondary"
                                sx={{ position: "absolute", top: 10, right: 10 }}
                                onClick={() => setIsHovered(false)}
                            >
                                <ExpandMoreIcon fontSize="large" />
                            </IconButton>
                            <Box sx={{}}>
                                {mapChips}
                                {projectData.githubLink && (
                                    <IconButton
                                        href={projectData.githubLink}
                                        target="_blank"
                                        aria-label="Github"
                                        color="secondary"
                                        sx={{ mr: 1, mb: 1 }}
                                    >
                                        <GitHubIcon fontSize="large" />
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
                                        <OpenInNewIcon fontSize="large" />
                                    </IconButton>
                                )}
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", pt: 1, pb: 1 }}>{mapPoints}</Box>
                        </Box>
                    </Box>

                    {!isHovered && (
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                height: "7.4vh",
                                backgroundColor: theme.palette.primary.main,
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}
                        >
                            <Box sx={{ mr: 1 }}>
                                <IconButton
                                    size="small"
                                    aria-label="ExpandLess"
                                    color="secondary"
                                    onClick={() => setIsHovered(true)}
                                >
                                    <ExpandLessIcon fontSize="large" />
                                </IconButton>
                            </Box>
                        </Box>
                    )}
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography
                        variant="projectTitle"
                        component="h4"
                        sx={{ color: "inherit", fontSize: { xs: 24, sm: 40, md: 36 } }}
                    >
                        {projectData.name}
                    </Typography>
                    <Typography variant="projectTechnology" component="p" sx={{ fontSize: { xs: 18, sm: 25 } }}>
                        {projectData.technologies}
                    </Typography>
                </Box>
            </Box>
        </>
    );
};
export default Project;
