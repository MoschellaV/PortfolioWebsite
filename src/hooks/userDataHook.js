import { useState, useEffect } from "react";
import { getUserData } from "@/pages/api/outboundRequests";
import { getDeviceType, getBrowser } from "@/lib/userUtils";

const useUserDataHook = () => {
    const [userData, setUserData] = useState(null);
    const [userDeviceData, setUserDeviceData] = useState(null);

    // fetch user data
    useEffect(() => {
        const fetchUserData = async () => {
            getUserData()
                .then((res) => {
                    if (res.status == 200) setUserData(res.data);
                })
                .catch((err) => {
                    const errObj = {
                        errStatus: err.code,
                        errMessage: err.messsage,
                    };

                    setUserData(errObj);
                });
        };

        const deviceData = {
            browser: getBrowser(),
            deviceType: getDeviceType(),
        };

        setUserDeviceData(deviceData);

        fetchUserData();
    }, []);

    return { userData, userDeviceData };
};

export default useUserDataHook;
