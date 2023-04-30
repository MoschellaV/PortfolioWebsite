import { useState, useEffect } from "react";
import { getUserData } from "@/pages/api/outboundRequests";

const useUserDataHook = () => {
    const [userData, setUserData] = useState(null);

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

    return { userData };
};

export default useUserDataHook;
