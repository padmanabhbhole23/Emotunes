const axios = require('axios');
const { mapEmotionToGenre } = require('../utils/helper');

// Function to get Spotify access token
async function getSpotifyAccessToken() {
    const response = await axios.post('https://accounts.spotify.com/api/token', null, {
        headers: {
            'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
            grant_type: 'client_credentials'
        }
    });
    return response.data.access_token;
}

// Function to fetch song recommendations based on emotion
exports.fetchSpotifyRecommendations = async (emotion) => {
    const accessToken = await getSpotifyAccessToken();

    // Map the emotion to a Spotify genre
    const genre = mapEmotionToGenre(emotion);

    // Fetch song recommendations from Spotify API
    const response = await axios.get('https://api.spotify.com/v1/recommendations', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        params: {
            seed_genres: genre,  // Use mapped genre as seed for recommendations
            limit: 10            // Limit the results to 10 songs
        }
    });

    // Return the list of recommended songs
    return response.data.tracks.map(track => ({
        title: track.name,
        artist: track.artists.map(artist => artist.name).join(", "),
        album: track.album.name,
        url: track.external_urls.spotify
    }));
};
