export const getDeviceType = () => {
    // return 'Unknown' if not in the browser environment
    if (typeof window === "undefined") return "Unknown";

    const userAgent = navigator.userAgent;

    if (/Android/i.test(userAgent)) {
        return "Android";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return "iOS";
    } else if (/Windows/i.test(userAgent)) {
        return "Windows";
    } else if (/Macintosh/i.test(userAgent)) {
        return "Mac";
    } else if (/Linux/i.test(userAgent)) {
        return "Linux";
    } else {
        return "Unknown";
    }
};

export const getBrowser = () => {
    // return 'Unknown' if not in the browser environment
    if (typeof window === "undefined") return "Unknown";

    const userAgent = navigator.userAgent;

    if (userAgent.indexOf("Chrome") > -1) {
        return "Chrome";
    } else if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } else if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
        return "Internet Explorer";
    } else if (userAgent.indexOf("Edge") > -1) {
        return "Edge";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
        return "Opera";
    } else {
        return "Unknown";
    }
};
