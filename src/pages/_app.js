import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "@/styles/globals.css";
import { Navbar } from "@/components";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 950,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: {
        primary: {
            main: "#171717",
        },
        secondary: {
            main: "#fff",
        },
    },
    typography: {
        fontFamily: "MonumentExtended, sans-serif",
        button: {
            textTransform: "none",
        },
        h1: {
            fontWeight: 800,
        },
        h4: {
            fontSize: 22,
        },
        h6: {
            fontSize: 16,
        },
    },
});

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Navbar />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
