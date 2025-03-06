import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "@mui/icons-material/Mail";

const tldr_data = [
    <>
        • <strong>2 years</strong> of experience across <strong>startups</strong>, <strong>Fortune 500</strong>, and{" "}
        <strong>FAANG</strong>
    </>,
    <>
        • <strong>3.94 GPA</strong>, {" Bachelor's of Computing, Major in CS, graduating May 2026"}
    </>,
    <>
        {"• Founded my university's GDSC, raised "} <strong>25K+</strong> for student initiatives
    </>,
    <>{"• Recognized by Google for my impact, flown to HQ for Google I/O 🚀"}</>,
];

const TLDR = () => {
    const theme = useTheme();

    return (
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2, mb: 1 }}>
            <Typography variant="CVText">tl;dr:</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", pl: 1 }}>
                {tldr_data.map((item, index) => (
                    <Typography key={index} variant="CVText" sx={{ fontSize: 14 }}>
                        {item}
                    </Typography>
                ))}
            </Box>
            <Box sx={{ display: "flex", mt: 2 }}>
                <Box sx={{ mr: 1 }}>
                    <Link href="https://github.com/MoschellaV" target="_blank" sx={{ "&:hover": { opacity: 0.7 } }}>
                        <Image
                            src="/images/soc-gh-d.svg"
                            alt="Link to my Github"
                            width={26}
                            height={26}
                            draggable={false}
                        />
                    </Link>
                </Box>
                <Box sx={{ ml: 1 }}>
                    <Link
                        href="https://www.linkedin.com/in/moschellav/"
                        target="_blank"
                        sx={{ "&:hover": { opacity: 0.7 } }}
                    >
                        <Image
                            src="/images/soc-li-d.svg"
                            alt="Link to my LinkedIn"
                            width={28}
                            height={28}
                            draggable={false}
                        />
                    </Link>
                </Box>
                <Box sx={{ ml: 2 }}>
                    <Link href="mailto:vincemoschella04@gmail.com" sx={{ "&:hover": { opacity: 0.7 } }}>
                        <MailIcon sx={{ fontSize: 30, fill: "#414141" }} />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default TLDR;
