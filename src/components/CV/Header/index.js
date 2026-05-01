import React from "react";
import { Box, useTheme, Typography } from "@mui/material";

const Header = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Typography variant="CVHeader" sx={{ mb: 0.7 }}>
          Short CV
          <span style={{ fontSize: 14 }}>
            <em> so far...</em>
          </span>
        </Typography>
      </Box>
      <Typography variant="CVSmallText" sx={{ opacity: 0.5 }}>
        updated April 30th 2026
      </Typography>
    </>
  );
};

export default Header;
