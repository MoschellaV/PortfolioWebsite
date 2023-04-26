import React from "react";
import { Grid, Box, Link, useTheme, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "./Carousel";

const AboutSection = () => {
    const theme = useTheme();

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
                    <Carousel />
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id neque ac risus
                            efficitur commodo ac in ante. Praesent a eleifend arcu. Proin eget enim ut orci dignissim
                            rhoncus nec a metus. Nam vitae est eget nisl vulputate fermentum at vel felis. Cras
                            consectetur faucibus nisi, ut gravida tellus posuere at. In venenatis tincidunt leo sit amet
                            pharetra. Duis non eros in ante tristique elementum. Etiam viverra non est nec pharetra.
                            Vestibulum venenatis lectus et sollicitudin ornare. Ut quis odio orci. Suspendisse elit
                            neque, aliquam eget libero a, accumsan dapibus nisl.
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{ mr: 4 }}>
                            <Link href="https://github.com/MoschellaV" sx={{ "&:hover": { opacity: 0.7 } }}>
                                <Image src="/images/github.svg" alt="github icon" width={80} height={80} />{" "}
                            </Link>
                        </Box>
                        <Box sx={{ ml: 4 }}>
                            <Link href="https://www.linkedin.com/in/moschellav/" sx={{ "&:hover": { opacity: 0.7 } }}>
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
