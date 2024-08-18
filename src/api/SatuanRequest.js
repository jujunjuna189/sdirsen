import axios from "axios";
import { API_SATUAN_GET } from "../config/api";
import { getLocalUser } from "../service/LocalStorage";

export const getSatuanRequest = async () => {
    const user = getLocalUser();
    try {
        const response = await axios.get(`${API_SATUAN_GET}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.satuan;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

export const getSatuanDetailRequest = async ({ id }) => {
    const user = getLocalUser();
    let append = `/${id}`;
    try {
        const response = await axios.get(`${API_SATUAN_GET}${append}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.satuan;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}