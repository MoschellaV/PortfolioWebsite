import React from "react";
import { Grid, Box, Link, useTheme, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "./Carousel";
import DisplayAboutImage from "./DisplayAboutImage";

const AboutSection = () => {
    const theme = useTheme();

    const aboutText =
        "Hi, I'm Vince Moschella, a second-year Computer Science student at the University of Guelph and an aspiring full stack developer. My passion lies in utilizing my technical knowledge and problem-solving abilities to create innovative solutions in the digital world. Embracing new challenges and opportunities, I'm determined to make a positive impact through my work. As a dedicated and ambitious individual, I will continuously strive to broaden my skill set and stay ahead of the curve in the ever-evolving tech landscape.";

    return (
        <>
            <Grid id="about" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        minHeight: { sx: "100vh", md: "140vh" },
                    }}
                >
                    <DisplayAboutImage />
                    {/* <Carousel /> */}
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        minHeight: "100vh",
                    }}
                >
                    <Box
                        sx={{
                            mr: { xs: 2, sm: 4, md: 6, lg: 10 },
                            ml: { xs: 6, lg: 10 },
                        }}
                    >
                        <Typography component="h3" variant="h3" sx={{ mb: 2, mr: -500 }}>
                            <span style={{ "-webkit-text-stroke-color": theme.palette.orange.bright }}>About </span>
                            About About About About About <br />
                            About About About About About About
                        </Typography>
                        <Typography component="p" variant="p">
                            {aboutText}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ mr: 4 }}>
                            <Link
                                href="https://github.com/MoschellaV"
                                target="_blank"
                                sx={{ "&:hover": { opacity: 0.7 } }}
                            >
                                <Image src="/images/github.svg" alt="github icon" width={80} height={80} />{" "}
                            </Link>
                        </Box>
                        <Box sx={{ ml: 4 }}>
                            <Link
                                href="https://www.linkedin.com/in/moschellav/"
                                target="_blank"
                                sx={{ "&:hover": { opacity: 0.7 } }}
                            >
                                <Image src="/images/linkedin.svg" alt="linkedin icon" width={80} height={80} />
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default AboutSection;
