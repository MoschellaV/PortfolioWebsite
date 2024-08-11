import React from "react";
import Image from "next/image";
import { Box, Grid, Typography, Link, Tooltip, Fade, styled, useTheme, useMediaQuery } from "@mui/material";

const WorkCard2 = ({ jobInfo }) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(`(max-width: 900px)`);
    const alignCompanyImages = useMediaQuery(`(max-width: 600px)`);

    const showTransitionLine = useMediaQuery(`(min-width: 900px)`); // same as isMobile but new variable for readability
    const changeLineImage = useMediaQuery(`(max-width: 1100px)`);
    const changeLineImage2 = useMediaQuery(`(max-width: 1100px)`);

    const resizeCompanyImage = useMediaQuery(`(max-width: 1214px)`);

    const CustomToolTipl = styled(({ className, ...props }) => (
        <Tooltip
            {...props}
            componentsProps={{
                tooltip: { className: className },
                popper: {
                    sx: {
                        zIndex: 99,
                    },
                },
            }}
        />
    ))(`
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.secondary.main};
        font-size: 13px;
        letter-spacing: 2px;
      `);

    const renderJobs = jobInfo.map((props, index) => {
        return (
            <Grid container key={index} sx={{ mb: isMobile && 10 }}>
                {(!props.isFlipped || alignCompanyImages) && (
                    <Grid
                        item
                        md={3}
                        sm={4}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                height: isMobile ? "70%" : "100%",
                                width: "90%",
                                border: "2px solid #000",
                                borderRadius: 7,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Link href={props.companyWebsite} target="_blank">
                                <CustomToolTipl
                                    title={props.companyName}
                                    placement="top"
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 600 }}
                                >
                                    <Image
                                        style={{ objectFit: "contain" }}
                                        draggable={false}
                                        src={props.imageUrl}
                                        alt={props.altText}
                                        width={resizeCompanyImage ? (isMobile ? 150 : 190) : 240}
                                        height={resizeCompanyImage ? (isMobile ? 150 : 190) : 230}
                                    />
                                </CustomToolTipl>
                            </Link>
                        </Box>
                    </Grid>
                )}
                <Grid
                    item
                    md={9}
                    sm={8}
                    xs={12}
                    sx={{
                        pr: props.isFlipped && 2,
                        pl: !props.isFlipped ? 4 : 2,
                        "@media (max-width: 500px)": {
                            pl: 2,
                        },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography component="h4" variant="companyNameText" sx={{ letterSpacing: 5 }}>
                        {props.company}
                    </Typography>
                    <Typography component="h4" variant="jobSubTitleText">
                        {props.positionTitle}
                    </Typography>
                    <Typography
                        component="p"
                        variant="jobSubTitleText"
                        sx={{ opacity: 0.6, fontWeight: 400, fontSize: 16, mt: 1 }}
                    >
                        {props.technologies}
                    </Typography>
                    <Typography
                        component="p"
                        variant="jobSubTitleText"
                        sx={{ opacity: 0.6, fontWeight: 400, fontSize: 16 }}
                    >
                        {props.jobDuration}
                    </Typography>
                    <Typography
                        component="p"
                        variant="jobSubTitleText"
                        sx={{ opacity: 0.6, fontWeight: 400, fontSize: 16 }}
                    >
                        {`${props.location} `}
                    </Typography>
                    <Typography component="p" variant="jobDescriptionText" sx={{ mt: 1 }}>
                        {props.descriptionText}
                    </Typography>
                </Grid>
                {props.isFlipped && !alignCompanyImages && (
                    <Grid
                        item
                        md={3}
                        sm={4}
                        xs={12}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                height: isMobile ? "70%" : "100%",
                                width: "90%",
                                border: "2px solid #000",
                                borderRadius: 7,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Link href={props.companyWebsite} target="_blank">
                                <CustomToolTipl
                                    title={props.companyName}
                                    placement="top"
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 600 }}
                                >
                                    <Image
                                        style={{ objectFit: "contain" }}
                                        draggable={false}
                                        src={props.imageUrl}
                                        alt={props.altText}
                                        width={resizeCompanyImage ? (isMobile ? 150 : 190) : 240}
                                        height={resizeCompanyImage ? (isMobile ? 150 : 190) : 230}
                                    />
                                </CustomToolTipl>
                            </Link>
                        </Box>
                    </Grid>
                )}
                {index !== jobInfo.length - 1 && showTransitionLine && (
                    <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box
                            sx={{
                                width: "80%",
                                height: 200,
                                position: "relative",
                                transform: `${index % 2 !== 0 && "scaleX(-1)"}`,
                                "@media (max-width: 1280px)": {
                                    width: "95%",
                                },
                                "@media (max-width: 1100px)": {
                                    width: "90%",
                                },
                                "@media (max-width: 1050px)": {
                                    width: "80%",
                                },
                            }}
                        >
                            <Image
                                src={
                                    changeLineImage
                                        ? changeLineImage2
                                            ? "/images/companyImages/arrowLong800.svg"
                                            : "/images/companyImages/arrowLong950.svg"
                                        : "/images/companyImages/arrowLong.svg"
                                }
                                alt=" "
                                fill
                                draggable={false}
                                style={{ userSelect: "none" }}
                            />
                        </Box>
                    </Grid>
                )}
            </Grid>
        );
    });

    const renderJobsMobileView = jobInfo.map((props, index) => {
        return (
            <Box key={index}>
                <Grid container spacing={2}></Grid>
            </Box>
        );
    });

    // return <>{isMobile ? renderJobsMobileView : renderJobs}</>;
    return renderJobs;
};

export default WorkCard2;
