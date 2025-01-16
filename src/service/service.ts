import axios from "axios";

export const getAll = async () => {
    try {
        const response = await axios.get('/api/image/all-no-pag');
        return response.data;
    } catch (error: any) {
        console.error(error.response.data);
    }
}