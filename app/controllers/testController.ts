import { sendGetRequest } from "../network/network";
export const apiTesting = async (url: string) => {
    var result = await sendGetRequest(url);
    return result;
};