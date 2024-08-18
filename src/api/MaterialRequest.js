import axios from "axios";
import { API_MATERIAL_GET } from "../config/api";
import { getLocalUser } from "../service/LocalStorage";

export const getMaterialRequest = async ({ filter = '' }) => {
    const user = getLocalUser();
    try {
        const response = await axios.get(`${API_MATERIAL_GET}?${filter}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            },
        });
        return response.data.list_data.material;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}