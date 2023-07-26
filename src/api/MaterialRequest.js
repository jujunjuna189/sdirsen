import axios from "axios";
import { API_MATERIAL_GET } from "../config/api";
import { getLocalUser } from "../service/LocalStorage";

export const getMaterialRequest = async ({ search = '' }) => {
    const user = getLocalUser();
    let append = `?search=${search}`;
    try {
        const response = await axios.get(`${API_MATERIAL_GET}${append}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            },
        });
        return response.data.list_data.material;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}