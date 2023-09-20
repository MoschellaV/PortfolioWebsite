import React, { useEffect, useState, useRef } from "react";
import { useScrollY } from "@/context/providers";
import { Box } from "@mui/material";

const HeroModel = ({ setSceneLoaded }) => {
    const scrollY = useScrollY();
    const [shouldScrollOff, setShouldScrollOff] = useState(false);

    useEffect(() => {
        setShouldScrollOff(scrollY >= 1000);
    }, [scrollY]);

    const splineViewerHeroRef = useRef(null);

    useEffect(() => {
        let heroLoadedTimeout;
        let fallbackTimeout;

        const checkHeroLoaded = () => {
            if (splineViewerHeroRef.current && splineViewerHeroRef.current.shadowRoot) {
                const element = splineViewerHeroRef.current.shadowRoot.getElementById("spline");

                if (element) {
                    const hasWidthAttribute = element.hasAttribute("width");

                    if (!hasWidthAttribute) heroLoadedTimeout = setTimeout(checkHeroLoaded, 1000);
                    else setSceneLoaded(true);
                } else {
                    heroLoadedTimeout = setTimeout(checkHeroLoaded, 1000);
                }
            }
        };

        checkHeroLoaded();

        // fallback timeout to set sceneLoaded to true after X seconds
        // used to wait for main scene to load since there is no onLoad callback
        fallbackTimeout = setTimeout(() => {
            setSceneLoaded(true);
        }, 15000);

        return () => {
            clearTimeout(heroLoadedTimeout);
            clearTimeout(fallbackTimeout);
        };
    }, [setSceneLoaded]);

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
                    zIndex: "0",
                }}
            >
                <Box sx={{ width: "100%", height: "100%" }}>
                    <script
                        type="module"
                        src="https://unpkg.com/@splinetool/viewer@0.9.304/build/spline-viewer.js"
                    ></script>
                    <spline-viewer
                        ref={splineViewerHeroRef}
                        loading-anim
                        url="https://prod.spline.design/nVr30ytQDIRKxKW6/scene.splinecode"
                    ></spline-viewer>
                </Box>
            </Box>
            <Box sx={{ minHeight: shouldScrollOff ? "200px" : "1770px" }}></Box>
        </>
    );
};

export default HeroModel;
