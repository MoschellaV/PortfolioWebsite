import React, { useState } from "react";
import styles from "@/styles/contactSection.module.css";
import { useUserData } from "@/context/providers";
import { Box, Typography, Button, useTheme } from "@mui/material";

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

    const [isConnecting, setIsConnecting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const submitForm = () => {
        const sendUserData = async (emailContent) => {
            setIsConnecting(true);
            setSuccessMessage("");
            setErrorMessage("");
            sendEmail(emailContent)
                .then((res) => {
                    if (res.status == 200) setSuccessMessage("Message sent successfully! Vince will be in touch soon.");
                })
                .catch((err) => {
                    console.error(err);
                    setErrorMessage("Message not sent. Please check your network connection and try again.");
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
            setIsConnecting(false);
            setSuccessMessage("");
            setErrorMessage("Unable to send message. Please fill in all fields.");
        }
    };

    const controlButtonColors = [theme.palette.red.light, theme.palette.yellow.light, theme.palette.green.light];

    const renderControlButtons = controlButtonColors.map((color, index) => {
        return (
            <Box
                key={index}
                sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    backgroundColor: color,
                    mr: 1.5,
                }}
            />
        );
    });

    return (
        <>
            <Box id="contact" sx={{ mt: "20vh" }}>
                <Typography
                    component="h3"
                    variant="h2"
                    sx={{ "-webkit-text-stroke-color": theme.palette.primary.main, textAlign: "center", lineHeight: 1 }}
                >
                    Get in touch
                </Typography>
            </Box>

            <Box
                sx={{
                    m: { xs: 1, sm: 1, md: 4 },
                    mt: { xs: 1, sm: 1, md: 1, lg: 1 },
                    p: 3,
                    pt: 3,
                    pb: 5,
                    minHeight: "90vh",
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 5,
                }}
            >
                {/* CONTROL BUTTONS */}
                <Box sx={{ display: "flex", mb: 3 }}>{renderControlButtons}</Box>

                <Typography variant="terminalText" component="p">
                    vincemoschella@Vinces-MacBook-Pro ~ % <br />
                    connect-with-vince \
                </Typography>
                <Box sx={{ ml: { xs: 2, md: 3 } }}>
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

                    {/* SEND BUTTON */}
                    <Button onClick={submitForm}>
                        <Typography
                            variant="terminalText"
                            component="p"
                            sx={{
                                color: theme.palette.orange.bright,
                                cursor: "pointer",
                                "&:hover": { opacity: 0.6 },
                            }}
                        >
                            --SEND-execute-connection
                        </Typography>
                    </Button>
                </Box>

                {/* CONNECTING MESSAGE */}
                {isConnecting && (
                    <Typography variant="terminalText" component="p">
                        vincemoschella@Vinces-MacBook-Pro ~ %{" "}
                        <span style={{ color: theme.palette.blue.main }}>connecting</span>
                        <br />
                        Establishing connection, please wait
                        <span className={!successMessage && !errorMessage && styles.loading} />
                    </Typography>
                )}

                {/* ERROR MESSAGE */}
                {errorMessage && (
                    <Typography variant="terminalText" component="p">
                        vincemoschella@Vinces-MacBook-Pro ~ % connection-failed
                        <br />
                        <span style={{ color: theme.palette.red.main }}>Error: </span>
                        {errorMessage}
                    </Typography>
                )}

                {/* SUCCESS MESSAGE */}
                {successMessage && (
                    <Typography variant="terminalText" component="p">
                        vincemoschella@Vinces-MacBook-Pro ~ % connection-established
                        <br />
                        <span style={{ color: theme.palette.green.main }}>Success: </span>
                        {successMessage}
                    </Typography>
                )}
            </Box>
        </>
    );
};

export default ContactSection;
