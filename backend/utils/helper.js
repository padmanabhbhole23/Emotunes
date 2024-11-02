// Map emotions to Spotify-supported genres
exports.mapEmotionToGenre = (emotion) => {
    const genreMap = {
        happy: "pop",
        sad: "blues",
        angry: "rock",
        relaxed: "chill",
        energetic: "dance"
    };

    // Return the mapped genre or a default genre if not found
    return genreMap[emotion.toLowerCase()] || "pop";
};
