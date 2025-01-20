import axios from "axios";

export const getAll = async (page: number) => {
    try {
        const response = await axios.get(`api/images?_page=${page}&_per_page=12`);
        return response.data;
    } catch (error: any) {
        console.error(error.response.data);
    }
}