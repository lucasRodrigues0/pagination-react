import axios from "axios";

export const getAll = async (page: number) => {
    try {
        const response = await axios.get(`/api/image?page=${page}&resultsPerPage=10`);
        return response.data;
    } catch (error: any) {
        console.error(error.response.data);
    }
}