import React from "react";
import Project from "./Project";
import { Box, Grid, Typography, useTheme } from "@mui/material";

const ProjectSection = () => {
    const theme = useTheme();

    const projectsInfo = [
        {
            name: "Ring Clone",
            technologies: "OpenCV/Flask/React",
            chips: ["Solo", "Open Source", "In Progress"],
            points: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Ut enim ad minim veniam, quis nostrud exercitation.",
                "Duis aute irure dolor in reprehenderit in voluptate.",
            ],
            githubLink: null, // leave as null if there is not link
            externalLink: null, // leave as null if there is not link
        },
    ];

    const renderProjects = projectsInfo.map((projectData, index) => {
        return (
            <Grid key={index} xs={12} lg={6}>
                <Project projectData={projectData} />
            </Grid>
        );
    });

    return (
        <>
            <Box
                id="projects"
                sx={{
                    width: "100vw",
                    height: 256,
                    pt: 1,
                    pb: 1,
                    backgroundColor: theme.palette.primary.main,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography
                    component="h3"
                    variant="h3"
                    sx={{ ml: -100, mr: -100, "-webkit-text-stroke-color": theme.palette.secondary.main }}
                >
                    <Box sx={{ display: "inline-block", mr: 5 }}>Projects</Box>
                    <Box sx={{ display: "inline-block", mr: 5, transform: "rotate(-20deg)" }}>Projects</Box>{" "}
                    <Box sx={{ display: "inline-block", mr: 5 }}>Projects</Box>
                    <Box
                        sx={{
                            display: "inline-block",
                            mr: 5,
                            transform: "rotate(-20deg)",
                            "-webkit-text-stroke-color": theme.palette.orange.bright,
                        }}
                    >
                        Projects
                    </Box>{" "}
                    <Box sx={{ display: "inline-block", mr: 5 }}>Projects</Box>
                    <Box sx={{ display: "inline-block", mr: 5, transform: "rotate(-20deg)" }}>Projects</Box>{" "}
                    <Box sx={{ display: "inline-block" }}>Projects</Box>
                </Typography>
            </Box>
            <Grid container spacing={0} sx={{ flexGrow: 1 }}>
                {renderProjects}
            </Grid>
        </>
    );
};
export default ProjectSection;
