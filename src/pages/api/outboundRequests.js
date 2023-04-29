import axios from "axios";

export const getUserData = () => {
    return axios({
        method: "GET",
        url: "https://ipapi.co/json/",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};

export const sendEmail = (emailContent) => {
    return axios({
        method: "POST",
        url: "/api/sendEmailHandler",
        data: emailContent,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    });
};
