import axios from "axios";
import { API_BINSAT_LAPLAKGIAT_GET, API_BINSAT_RENLAKGIAT_GET } from "../config/api";
import { getLocalUser } from "../service/LocalStorage";

export const getBinsatLaplakgiatRequest = async ({ filter = '' }) => {
    const user = getLocalUser();
    try {
        const response = await axios.get(`${API_BINSAT_LAPLAKGIAT_GET}?${filter}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.binsat_laplakgiat;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

export const getBinsatRenlakgiatRequest = async ({ filter = '' }) => {
    const user = getLocalUser();
    try {
        const response = await axios.get(`${API_BINSAT_RENLAKGIAT_GET}?${filter}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.binsat_renlakgiat;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}