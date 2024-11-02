const { fetchSpotifyRecommendations } = require('../services/spotifyService');

// Controller function to get recommendations
exports.getRecommendations = async (req, res) => {
    try {
        const { emotion } = req.body;  // Get emotion from request body
        const recommendations = await fetchSpotifyRecommendations(emotion);  // Call the service layer
        res.json({ songs: recommendations });
    } catch (error) {
        console.error("Error in getting recommendations:", error);
        res.status(500).json({ message: 'Error fetching recommendations', error });
    }
};
