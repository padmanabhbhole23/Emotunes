import axios from 'axios';

export const fetchRecommendedSongs = async (emotionData) => {
    try {
        const response = await axios.post('/api/songs/recommend', { emotion: emotionData });
        return response.data;
    } catch (error) {
        console.error('Error fetching song recommendations', error);
    }
};
