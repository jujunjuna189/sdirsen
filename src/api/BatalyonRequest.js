import axios from "axios";
import { API_BATALYON_GET } from "../config/api";
import { getLocalUser } from "../service/LocalStorage";

export const getBatalyonRequest = async () => {
    const user = getLocalUser();
    try {
        const response = await axios.get(`${API_BATALYON_GET}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.battalion;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

export const getBatalyonDetailRequest = async ({ id }) => {
    const user = getLocalUser();
    let append = `/${id}`;
    try {
        const response = await axios.get(`${API_BATALYON_GET}${append}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.battalion;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}