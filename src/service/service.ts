import axios from "axios";

const API_URL = import.meta.env.PROD ? import.meta.env.VITE_API_URL : '/api';

export const getAll = async (page: number) => {
    try {
        console.log(`apiurl: ${API_URL}`);
        const response = await axios.get(`${API_URL}/image?page=${page}&resultsPerPage=12`);
        return response.data;
    } catch (error: any) {
        console.error(error.response.data);
    }
}