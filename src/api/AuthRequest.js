import axios from "axios";
import { API_AUTH_LOGIN } from "../config/api";

export const loginRequest = async ({ body }) => {
    try {
        const response = await axios.post(`${API_AUTH_LOGIN}`, body);
        return response.data.list_data;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}