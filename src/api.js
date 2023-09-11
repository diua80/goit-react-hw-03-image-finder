import axios from "axios";

export const getImages = async (query, page) => {
    try {
        const response = await axios.get(
            `https://pixabay.com/api/?q=${query}&page=${page}&key=36868746-ee27fcb4cfd12995e4eac6ca6&image_type=photo&orientation=horizontal&per_page=12`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};