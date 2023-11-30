import axios from 'axios';

const IdClient = process.env.REACT_APP_CLIENT_ID_SPOTIFY;
const clientSecret = process.env.REACT_APP_SECRET_SPOTIFY;
const idSpotify = process.env.REACT_APP_ID_SPOTIFY;

const data = {
    grant_type: 'client_credentials',
    client_id: IdClient,
    client_secret: clientSecret,
};

export const fetchSpotifyInfo = async (max = 10) => {
    try {
        const res = await axios.post('https://accounts.spotify.com/api/token', new URLSearchParams(data), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const accessToken = res.data.access_token;
        try {
            const spotifyAccountData = await axios.get(`https://api.spotify.com/v1/artists/${idSpotify}`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            });

            const spotifyTracks = await axios.get(`https://api.spotify.com/v1/artists/${idSpotify}/top-tracks?market=FR`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            });

            const spotifyAlbums = await axios.get(`https://api.spotify.com/v1/artists/${idSpotify}/albums?limit=${max}`, {
                headers: {
                    "Authorization": `Bearer ${accessToken}`
                }
            });

            const latestAlbumId = spotifyAlbums.data.items[0].id;
          
            const spotifylatestAlbumTracks = await axios.get(
            `https://api.spotify.com/v1/albums/${latestAlbumId}/tracks`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
            );

            return { spotifyAccountData, spotifyTracks, spotifyAlbums, spotifylatestAlbumTracks };
        } catch (error) {
            console.error(error);
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
};
