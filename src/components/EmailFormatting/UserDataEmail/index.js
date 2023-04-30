import React from "react";
import moment from "moment";

// mui isn't useful since this will be displayed in an inbox
// so normal html and inline styles can only be used
const UserDataEmail = ({ userData, timeAccessed }) => {
    const data = [
        {
            label: "Country",
            value: userData.country,
        },
        {
            label: "Region",
            value: userData.region,
        },
        {
            label: "City",
            value: userData.city,
        },
        {
            label: "Postal",
            value: userData.postal,
        },
        {
            label: "Latitude",
            value: userData.latitude,
        },
        {
            label: "Longitude",
            value: userData.longitude,
        },
        {
            label: "Timezone",
            value: userData.timezone,
        },
        {
            label: "IP",
            value: userData.ip,
        },
        {
            label: "IP Version",
            value: userData.version,
        },

        {
            label: "Network Organization",
            value: userData.org,
        },
        {
            label: "Network",
            value: userData.network,
        },
    ];

    const renderRows = data.map((data, index) => {
        return index % 2 === 0 ? (
            <tr key={index} style={{ backgroundColor: "#dddddd" }}>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{data.label}</td>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{data.value}</td>
            </tr>
        ) : (
            <tr key={index}>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{data.label}</td>
                <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{data.value}</td>
            </tr>
        );
    });

    return (
        <div style={{ color: "#000" }}>
            <h2>Website Accessed at {timeAccessed}</h2>
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <tr>
                    <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Data Type</th>
                    <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Value</th>
                </tr>
                {renderRows}
            </table>
        </div>
    );
};

export default UserDataEmail;
