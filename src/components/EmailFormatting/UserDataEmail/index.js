import React from "react";
import moment from "moment";

// mui isn't useful since this will be displayed in an inbox
// so normal html and inline styles can only be used
const UserDataEmail = ({ userData, userDeviceData, timeAccessed }) => {
    const data = [
        {
            label: "Country",
            value: userData?.country ?? "Unknown",
        },
        {
            label: "Region",
            value: userData?.region ?? "Unknown",
        },
        {
            label: "City",
            value: userData?.city ?? "Unknown",
        },
        {
            label: "Postal",
            value: userData?.postal ?? "Unknown",
        },
        {
            label: "Latitude",
            value: userData?.latitude ?? "Unknown",
        },
        {
            label: "Longitude",
            value: userData?.longitude ?? "Unknown",
        },
        {
            label: "Timezone",
            value: userData?.timezone ?? "Unknown",
        },
        {
            label: "Browser",
            value: userDeviceData?.browser ?? "Unknown",
        },
        {
            label: "DeviceType",
            value: userDeviceData?.deviceType ?? "Unknown",
        },
        {
            label: "IP",
            value: userData?.ip ?? "Unknown",
        },
        {
            label: "IP Version",
            value: userData?.version ?? "Unknown",
        },
        {
            label: "Network Organization",
            value: userData?.org ?? "Unknown",
        },
        {
            label: "Network",
            value: userData?.network ?? "Unknown",
        },
    ];

    const errData = [
        {
            label: "Error Status",
            value: userData.errStatus ?? "Unknown",
        },
        {
            label: "Error Message",
            value: userData.message ?? "Unknown",
        },
    ];

    const renderRows = data.map((data, index) => {
        return index % 2 === 0
            ? data.value !== "Unknown" && (
                  <tr key={index} style={{ backgroundColor: "#dddddd" }}>
                      <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{data.label}</td>
                      <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{data.value}</td>
                  </tr>
              )
            : data.value !== "Unknown" && (
                  <tr key={index}>
                      <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{data.label}</td>
                      <td style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>{data.value}</td>
                  </tr>
              );
    });

    return (
        <div style={{ color: "#000" }}>
            <h2>Website Accessed at {timeAccessed}</h2>
            {errData[0].value !== "Unknown" && errData[1].value !== "Unknown" && (
                <div>
                    <p>
                        <strong>{errData[0].label}: </strong>
                        {errData[0].value}
                    </p>
                    <p>
                        <strong>{errData[1].label}: </strong>
                        {errData[1].value}
                    </p>
                    <p>
                        Unable to retrive local userData. The error is likely caused by an ad blocker or some other
                        tool.
                    </p>
                </div>
            )}

            {data && (
                <table style={{ borderCollapse: "collapse", width: "100%" }}>
                    <tr>
                        <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Data Type</th>
                        <th style={{ border: "1px solid #dddddd", textAlign: "left", padding: "8px" }}>Value</th>
                    </tr>
                    {renderRows}
                </table>
            )}
        </div>
    );
};

export default UserDataEmail;
