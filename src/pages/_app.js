import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "@/styles/globals.css";
import { Navbar } from "@/components";
import { ScrollYProvider, theme } from "@/context/providers";

export default function App({ Component, pageProps }) {
    return (
        <>
            <ScrollYProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navbar />
                    <Component {...pageProps} />
                </ThemeProvider>
            </ScrollYProvider>
        </>
    );
}
