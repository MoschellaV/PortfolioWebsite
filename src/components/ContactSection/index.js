import React, { useState } from "react";
import { useUserData } from "@/context/providers";
import { Box, Typography, useTheme, Button } from "@mui/material";

import InputField from "./InputField";
import ContactEmail from "../EmailFormatting/ContactEmail";
import UserDataEmail from "../EmailFormatting/UserDataEmail";

import { renderToString } from "react-dom/server";
import { currentDateTime } from "@/helper/helperFunctions";

import { sendEmail } from "@/pages/api/outboundRequests";

const ContactSection = () => {
    const theme = useTheme();
    const { userData } = useUserData();
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    const submitForm = () => {
        const sendUserData = async (emailContent) => {
            sendEmail(emailContent).catch((err) => {
                console.error(err);
            });
        };

        // if email is sent & data is pulled
        if (userData && nameValue && emailValue && messageValue) {
            let timeAccessed = currentDateTime();

            let email = {
                name: `${nameValue} @ ${timeAccessed}`,
                email: emailValue,
                message: renderToString(
                    <>
                        <ContactEmail nameValue={nameValue} emailValue={emailValue} messageValue={messageValue} />
                        <UserDataEmail userData={userData} timeAccessed={timeAccessed} />
                    </>
                ),
            };

            sendUserData(email);
            setNameValue("");
            setEmailValue("");
            setMessageValue("");
        }
        // if email is sent & data cannot be pulled
        else if (nameValue && emailValue && messageValue) {
            let timeAccessed = currentDateTime();

            let email = {
                name: `${nameValue} @ ${timeAccessed}`,
                email: emailValue,
                message: renderToString(
                    <ContactEmail nameValue={nameValue} emailValue={emailValue} messageValue={messageValue} />
                ),
            };

            sendUserData(email);
            setNameValue("");
            setEmailValue("");
            setMessageValue("");
        } else {
            console.log("fill fields");
        }
    };

    return (
        <>
            <Box sx={{ mt: "20vh" }}>
                <Typography
                    component="h3"
                    variant="h2"
                    sx={{ "-webkit-text-stroke-color": theme.palette.primary.main, textAlign: "center", lineHeight: 1 }}
                >
                    Get in touch
                </Typography>
            </Box>

            <Box sx={{ m: 5, mt: 1, p: 3, backgroundColor: theme.palette.primary.main, borderRadius: 5 }}>
                <Typography variant="terminalText" component="p">
                    vincemoschella@Vinces-MacBook-Pro ~ % <br />
                    connect-with-vince \
                </Typography>
                <Box sx={{ ml: 3 }}>
                    {/* NAME */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                        <Typography variant="terminalText" component="p" sx={{ mr: 1 }}>
                            --name="
                        </Typography>
                        <InputField textFieldWidth={20} value={nameValue} setValue={setNameValue} />
                        <Typography variant="terminalText" component="p" sx={{ ml: 1 }}>
                            " \
                        </Typography>
                    </Box>
                    {/* EMAIL */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                        <Typography variant="terminalText" component="p" sx={{ mr: 1 }}>
                            --email="
                        </Typography>
                        <InputField textFieldWidth={30} value={emailValue} setValue={setEmailValue} />
                        <Typography variant="terminalText" component="p" sx={{ ml: 1 }}>
                            " \
                        </Typography>
                    </Box>
                    {/* MESSAGE */}
                    <Box sx={{ display: "flex", mb: 0.5, position: "relative" }}>
                        <Typography variant="terminalText" component="p" sx={{ alignSelf: "flex-start", mr: 1 }}>
                            --message="
                        </Typography>
                        <InputField
                            isMultiline={true}
                            textFieldWidth={40}
                            value={messageValue}
                            setValue={setMessageValue}
                        />
                        <Typography variant="terminalText" component="p" sx={{ alignSelf: "flex-end", ml: 1 }}>
                            "
                        </Typography>
                    </Box>
                    <Button onClick={submitForm}>
                        <Typography
                            variant="terminalText"
                            component="p"
                            sx={{ color: theme.palette.orange.bright, cursor: "pointer" }}
                        >
                            --SEND-execute-connection
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default ContactSection;
