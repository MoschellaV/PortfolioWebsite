import React, { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { ScrollYProvider, theme } from "@/context/providers";
import "@/styles/globals.css";
import { Navbar, UserDataEmail } from "@/components";

import { renderToString } from "react-dom/server";
import moment from "moment";

import { getUserData, sendEmail } from "./api/outboundRequests";

export default function App({ Component, pageProps }) {
    const [userData, setUserData] = useState(null);

    // get time
    function currentDateTime() {
        return moment().format("h:mma MMMM D YYYY");
    }

    // fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            getUserData()
                .then((res) => {
                    if (res.status == 200) setUserData(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        fetchUserData();
    }, []);

    // send user data
    useEffect(() => {
        const sendUserData = async (emailContent) => {
            sendEmail(emailContent).catch((err) => {
                console.error(err);
            });
        };

        if (userData) {
            let timeAccessed = currentDateTime();

            let email = {
                name: "Personal Website",
                email: `UserActivity @ ${timeAccessed}`,
                message: renderToString(<UserDataEmail userData={userData} timeAccessed={timeAccessed} />),
            };

            sendUserData(email);
        }
    }, [userData]);

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
