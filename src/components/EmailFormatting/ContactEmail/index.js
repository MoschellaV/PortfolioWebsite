import React from "react";

const ContactEmail = ({ nameValue, emailValue, messageValue }) => {
    return (
        <div style={{ color: "#000" }}>
            <h2>{nameValue} reached out!</h2>
            <p>Name: {nameValue}</p>
            <p>Email: {emailValue}</p>
            <p>Message: {messageValue}</p>
            <hr />
        </div>
    );
};

export default ContactEmail;
