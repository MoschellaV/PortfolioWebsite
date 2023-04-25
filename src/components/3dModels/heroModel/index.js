import React, { useEffect } from "react";
import { Box } from "@mui/material";

const HeroModel = ({ shouldScrollOff }) => {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    position: shouldScrollOff ? "static" : "fixed",
                    visibility: shouldScrollOff ? "hidden" : "visible",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                }}
            >
                <Box sx={{ width: "100%", height: "100%" }}>
                    <script
                        type="module"
                        src="https://unpkg.com/@splinetool/viewer@0.9.304/build/spline-viewer.js"
                    ></script>
                    <spline-viewer
                        loading-anim
                        url="https://prod.spline.design/nVr30ytQDIRKxKW6/scene.splinecode"
                    ></spline-viewer>
                </Box>
            </Box>
            <Box sx={{ minHeight: shouldScrollOff ? "1000px" : "1770px" }}></Box>
        </>
    );
};

export default HeroModel;
