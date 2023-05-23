import React from "react";
import { Grid, Box, Link, useTheme, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "./Carousel";
import DisplayAboutImage from "./DisplayAboutImage";
import HoverTextAppear from "../HoverTextAppear";

const AboutSection = () => {
    const theme = useTheme();

    // const aboutText = `Hi, I'm Vince and I'm glad you found my site! I'm a student based in Toronto where I study Computer Science. I love to take on challenges and make things that solve real world problems. When I'm not breaking prod, I'm learning about AI, practicing some calisthenics at the gym, creating a culinary masterpiece in the kitchen at 3am, or crafting a new spotify playlist.`;

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
                    {/* <DisplayAboutImage /> */}
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
                            ml: { xs: 3, lg: 10 },
                        }}
                    >
                        <Typography component="h3" variant="h3" sx={{ mb: 2, mr: -500 }}>
                            <span style={{ "-webkit-text-stroke-color": theme.palette.orange.bright }}>About </span>
                            About About About About About <br />
                            About About About About About About
                        </Typography>
                        <Typography component="p" variant="p">
                            Hi, I&apos;m Vince and I&apos;m glad you found my site! I&apos;m a student based in Toronto
                            where I study Computer Science. I love to take on challenges and make things that solve real
                            world problems. When I&apos;m not breaking prod, I&apos;m{" "}
                            <HoverTextAppear newText={"(how it will inevitably replace me)"}>
                                learning about AI
                            </HoverTextAppear>
                            , practicing some calisthenics at the gym, crafting a new spotify playlist, or{" "}
                            <HoverTextAppear newText={"(I make eggs)"}>
                                creating a culinary masterpiece in the kitchen at 3am
                            </HoverTextAppear>
                            .
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ mr: 4 }}>
                            <Link
                                href="https://github.com/MoschellaV"
                                target="_blank"
                                sx={{ "&:hover": { opacity: 0.7 } }}
                            >
                                <Image src="/images/soc-gh.svg" alt="Link to my Github" width={80} height={80} />
                            </Link>
                        </Box>
                        <Box sx={{ ml: 4 }}>
                            <Link
                                href="https://www.linkedin.com/in/moschellav/"
                                target="_blank"
                                sx={{ "&:hover": { opacity: 0.7 } }}
                            >
                                <Image src="/images/soc-li.svg" alt="Link to my LinkedIn" width={80} height={80} />
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default AboutSection;
