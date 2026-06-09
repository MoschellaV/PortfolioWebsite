import React, { useCallback, useEffect, useState } from "react";
import { useScrollY, useSplineHero } from "@/context/providers";
import { HERO_SCROLL_THRESHOLD } from "@/lib/scroll";
import { Box } from "@mui/material";

const HeroModel = ({ setSceneLoaded }) => {
  const scrollY = useScrollY();
  const [shouldScrollOff, setShouldScrollOff] = useState(false);

  useEffect(() => {
    setShouldScrollOff(scrollY >= HERO_SCROLL_THRESHOLD);
  }, [scrollY]);

  const splineViewerHeroRef = useSplineHero();
  const [splineViewerNode, setSplineViewerNode] = useState(null);

  const setSplineViewerRef = useCallback(
    (node) => {
      splineViewerHeroRef.current = node;
      setSplineViewerNode(node);
    },
    [splineViewerHeroRef],
  );

  useEffect(() => {
    if (!splineViewerNode) return;

    const handleLoadComplete = () => {
      setSceneLoaded(true);
    };

    splineViewerNode.addEventListener("load-complete", handleLoadComplete);

    return () => {
      splineViewerNode.removeEventListener("load-complete", handleLoadComplete);
    };
  }, [splineViewerNode, setSceneLoaded]);

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
          <spline-viewer
            ref={setSplineViewerRef}
            loading="eager"
            url="https://prod.spline.design/UOcALzk3C6peWtlh/scene.splinecode"
          ></spline-viewer>
        </Box>
      </Box>
      <Box sx={{ minHeight: shouldScrollOff ? "200px" : "1770px" }}></Box>
    </>
  );
};

export default HeroModel;
