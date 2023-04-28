import React from "react";
import Image from "next/image";
import { Box, Grid, Typography, Link, Tooltip, Fade, styled, useTheme } from "@mui/material";

const WorkCard = ({ jobInfo }) => {
    const theme = useTheme();

    const CustomToolTipl = styled(({ className, ...props }) => (
        <Tooltip {...props} componentsProps={{ tooltip: { className: className } }} />
    ))(`
        background-color: ${theme.palette.primary.main};
        color: ${theme.palette.secondary.main};
        font-size: 13px;
      `);

    const renderJobs = jobInfo.map((props, index) => {
        return (
            <Box key={index}>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        pt: 10,
                        pb: 0,
                        pr: 5,
                        pl: 5,
                        flexGrow: 1,
                        justifyContent: "flex-end",
                        borderBottom: `3px solid ${theme.palette.primary.main}`,
                    }}
                >
                    <Grid
                        xs={5}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            p: 5,
                        }}
                    >
                        <Box sx={{ position: "relative", width: "50%", height: "100%" }}>
                            <Link href={props.companyWebsite} target="_blank">
                                <CustomToolTipl
                                    title={props.companyName}
                                    placement="top"
                                    TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 600 }}
                                >
                                    <Image src={props.imageUrl} alt={props.altText} fill />
                                </CustomToolTipl>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid
                        xs={7}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Typography component="h4" variant="jobTitleText">
                            <span style={{ color: theme.palette.orange.bright }}>
                                {props.positionTitle.orangePortion}
                            </span>{" "}
                            {props.positionTitle.blackPortion}
                        </Typography>
                        <Typography component="p" variant="jobSubTitleText" sx={{ opacity: 0.5, lineHeight: 1.5 }}>
                            {props.technologies}
                        </Typography>
                        <Typography component="p" variant="p" sx={{ mr: 4, mt: 3 }}>
                            {props.descriptionText}
                        </Typography>
                    </Grid>
                    <Box>
                        <Typography component="p" variant="p" sx={{ mt: 3, textAlign: "end" }}>
                            {props.jobDuration}
                        </Typography>
                    </Box>
                </Grid>
            </Box>
        );
    });

    return <>{renderJobs}</>;
};

export default WorkCard;
