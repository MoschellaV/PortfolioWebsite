import React from "react";

// mui isn't useful since this will be displayed in an inbox
// so normal html and inline styles can only be used
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
