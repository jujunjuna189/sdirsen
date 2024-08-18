import axios from "axios";
import { API_LAPSAT_INDUK_GET, API_LAPSAT_LAMPIRAN_GET } from "../config/api";
import { getLocalUser } from "../service/LocalStorage";

export const getLapsatIndukRequest = async ({ filter = '' }) => {
    const user = getLocalUser();
    try {
        const response = await axios.get(`${API_LAPSAT_INDUK_GET}?${filter}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.lapsat_induk;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

export const getLapsatLampiranRequest = async ({ filter = '' }) => {
    const user = getLocalUser();
    try {
        const response = await axios.get(`${API_LAPSAT_LAMPIRAN_GET}?${filter}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.lapsat_lampiran;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}