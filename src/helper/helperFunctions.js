// get time
import moment from "moment";

export const currentDateTime = () => {
    return moment().format("h:mma MMMM D YYYY");
};
