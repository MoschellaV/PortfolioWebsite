import { Box } from "@mui/material";

const HeroModel = () => {
    return (
        <>
            <Box sx={{ height: "100vh" }}>
                <script
                    type="module"
                    src="https://unpkg.com/@splinetool/viewer@0.9.304/build/spline-viewer.js"
                ></script>
                <spline-viewer
                    loading-anim
                    url="https://prod.spline.design/nVr30ytQDIRKxKW6/scene.splinecode"
                ></spline-viewer>
            </Box>
        </>
    );
};

export default HeroModel;
