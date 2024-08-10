import React, { useState } from "react";
import Project from "./Project";
import { Box, CircularProgress, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

// 3d models
import GameController from "../3dModels/ProjectModels/GameController";
import SortingBars from "../3dModels/ProjectModels/SortingBars";
import CraftACard from "../3dModels/ProjectModels/CraftACard";
import PortfolioWebsite from "../3dModels/ProjectModels/PortfolioWebsite";
import RingClone from "../3dModels/ProjectModels/RingClone";
import HabitStep from "../3dModels/ProjectModels/HabitStep";
import CallMeMaybe from "../3dModels/ProjectModels/CallMeMaybe";
import DropModel from "../3dModels/ProjectModels/CallMeMaybe copy";

const ProjectSection = () => {
    const theme = useTheme();
    const [itemsToShow, setItemsToShow] = useState(6);
    const [isLoadMore, setIsLoadMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const isMedium = useMediaQuery("(min-width:900px) and (max-width:1200px)");

    const projectsInfo = [
        {
            name: "Call Me Maybe",
            technologies: "React/OpenAI/Twilio",
            chips: ["Hack The 6ix 2024", "AI Phone Calls", "Human Emoition"],
            points: [
                "Hey, I just met you, and this is crazy...",
                "Make phone calls with human-like AI voices",
                "Decide the tone and stability of the AI's voice",
                "AI pipeline with OpenAI, 11ElevenLabs & Twilio",
            ],
            githubLink: "https://github.com/MoschellaV/HackThe6ix2024", // leave as null if there is not link
            externalLink: "https://hack-the6ix2024.vercel.app/", // leave as null if there is not link
            devpostLink: "https://devpost.com/software/call-me-maybe-c7u2d3",
            model: <CallMeMaybe />,
        },
        {
            name: "DropModel",
            technologies: "TensorFlow/FastAPI/React",
            chips: ["Hack The North 2023", "ML Training", "Full Stack"],
            points: [
                "Train a custom ML Model by uploading your data",
                "Watch your custom ML model train in real-time",
                "Generate predictions from unique data sets",
                "Step-by-step guide for model training",
            ],
            githubLink: "https://github.com/MoschellaV/HackTheNorth2023", // leave as null if there is not link
            devpostLink: "https://devpost.com/software/dropmodel", // leave as null if there is not link
            model: <DropModel />,
        },
        {
            name: "Habit Step",
            technologies: "Next/Prisma/OpenAI",
            chips: ["GryphHacks 2023", "AI Powered", "Serverless"],
            points: [
                "Develop step-by-step plans to build habits",
                "Used zero-shot text classification to create general questions",
                "OpenAI to generate personal AI questionnaire",
                "Prisma for easy and efficient data storage",
            ],
            githubLink: "https://github.com/MoschellaV/GryphHacks2023", // leave as null if there is not link
            devpostLink: "https://devpost.com/software/habit-plan", // leave as null if there is not link
            model: <HabitStep />,
        },
        {
            name: "Ring Clone",
            technologies: "OpenCV/React/Firebase",
            chips: ["Supports Multiple Cams", "Computer vision", "Video Streaming"],
            points: [
                "Face recognition using Python & OpenCV",
                "Live data transmission with WebSockets",
                "Ring Doorbell built with Raspberry Pi and camera",
                "Cross-platform mobile app with React Native",
            ],
            githubLink: "https://github.com/MoschellaV/RingClone",
            externalLink: null,
            model: <RingClone />,
        },
        {
            name: "Portfolio Website",
            technologies: "Next/Spline",
            chips: ["3D Models", "Handcrafted", "Magic Touch", "User Experience"],
            points: [
                "Next.js for fast, optimized performance",
                "3D modeled unique assets for personal touch",
                "Integrated models with Spline for a 3D experience",
                "Handcrafted design in Figma",
            ],
            githubLink: "https://github.com/MoschellaV/PortfolioWebsite",
            externalLink: null,
            model: <PortfolioWebsite />,
        },
        {
            name: "CraftACard",
            technologies: "MERN Stack",
            chips: ["Full-Stack", "Data Storage", "NoSQL Here"],
            points: [
                "Easily create and send custom ecards",
                "Responsive UI with React & React-Bootstrap",
                "Efficient user data storage using MongoDB",
                "RESTful API's with Node.js and Express",
            ],
            githubLink: "https://github.com/MoschellaV/CraftACard",
            externalLink: null,
            model: <CraftACard />,
        },
        {
            name: "Sorting Visualizer",
            technologies: "React/Mantine",
            chips: ["Algorithms", "Mesmerizing", "Interactive"],
            points: [
                "Real-time algorithm visualization",
                "Customize array size and sorting speed",
                "Utilizes React and Mantine for responsive design",
                "Watch the magic of sorting algorithms in action",
            ],
            githubLink: "https://github.com/MoschellaV/SortingVisualizer",
            externalLink: "https://moschella-sorting-visualizer.netlify.app/",
            model: <SortingBars />,
        },
        {
            name: "Kuiper Space",
            technologies: "Unity/C#",
            chips: ["2D Game", "Dynamic Mechanics", "Enemy Algorithm", "High School Project"],
            points: [
                "2D endless space shooter",
                "Online leaderboard for competition",
                "Multiple spacecraft with unique behaviors",
                "Destroy enemy asteroids for score",
            ],
            githubLink: "https://github.com/MoschellaV/KuiperSpace",
            externalLink: "https://vmoschella.itch.io/kuiper-space",
            model: <GameController />,
        },
    ];

    const renderProjects = projectsInfo.slice(0, itemsToShow).map((projectData, index) => {
        return (
            <Grid item key={index} xs={isMedium ? 6 : 12} md={isMedium ? 6 : 4}>
                <Project projectData={projectData} projectIndex={index} />
            </Grid>
        );
    });

    const showProjectshandler = () => {
        if (isLoadMore) {
            setLoading(true);
            setTimeout(() => {
                setItemsToShow(projectsInfo.length);
                setLoading(false);
            }, 1000);
        } else {
            setItemsToShow(6);
        }

        setIsLoadMore(!isLoadMore);
    };

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
                    sx={{ ml: -100, mr: -100, WebkitTextStrokeColor: theme.palette.secondary.main }}
                >
                    <Box sx={{ display: "inline-block", mr: 5 }}>Projects</Box>
                    <Box sx={{ display: "inline-block", mr: 5, transform: "rotate(-20deg)" }}>Projects</Box>{" "}
                    <Box sx={{ display: "inline-block", mr: 5 }}>Projects</Box>
                    <Box
                        sx={{
                            display: "inline-block",
                            mr: 5,
                            transform: "rotate(-20deg)",
                            WebkitTextStrokeColor: theme.palette.orange.bright,
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
            <Box sx={{ display: "flex", justifyContent: "space-around", my: 10 }}>
                {!loading ? (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            opacity: 0.7,
                            "&:hover": {
                                textDecoration: "underline",
                                cursor: "pointer",
                            },
                        }}
                        onClick={showProjectshandler}
                    >
                        <Typography
                            component="p"
                            variant="p"
                            sx={{
                                textDecoration: "inherit",
                            }}
                        >
                            {isLoadMore ? "Show More" : "Show Less"}
                        </Typography>
                        {isLoadMore ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                    </Box>
                ) : (
                    <CircularProgress />
                )}
            </Box>
        </>
    );
};
export default ProjectSection;
