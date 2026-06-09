import React, { memo } from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material/";
import Box from "@mui/material/Box";
import styles from "@/styles/Animations.module.css";

const LOADER_DELAYS = [
  "0s",
  "0.1s",
  "0.2s",
  "0.15s",
  "0.25s",
  "0.35s",
  "0.3s",
  "0.4s",
  "0.5s",
];

function LoadingPage({ startFadeOut }) {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#171717",
        zIndex: 10000,
        opacity: startFadeOut ? 0 : 1,
        transition: "opacity 4s ease-out",
        pointerEvents: startFadeOut ? "none" : "auto",
      }}
    >
      <div className={styles.loaderGrid}>
        {LOADER_DELAYS.map((delay, index) => (
          <span
            key={index}
            className={styles.loaderDot}
            style={{ animationDelay: delay }}
          />
        ))}
      </div>
      <Stack
        spacing={2}
        sx={{ mt: 5, opacity: startFadeOut ? 0 : 1, textAlign: "center" }}
      >
        <Typography component="h3" variant="h4" sx={{ fontSize: 18 }}>
          One sec...
        </Typography>
        {isMobile && (
          <Typography
            component="p"
            variant="body1"
            sx={{
              color: "#F6F6F6",
              fontStyle: "italic",
              fontSize: 12,
              opacity: 0.7,
            }}
          >
            best viewed on larger screens
          </Typography>
        )}

        <Typography
          component="p"
          variant="body1"
          sx={{ color: "#F6F6F6", fontSize: 12, opacity: 0.7, pt: 4 }}
        >
          loading something handcrafted ✨
        </Typography>
      </Stack>
    </Box>
  );
}

export default memo(LoadingPage);
