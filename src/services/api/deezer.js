import axios from 'axios';

const IdClient = process.env.REACT_APP_CLIENT_ID_DEEZER;
const clientSecret = process.env.REACT_APP_SECRET_DEEZER;
const idDeezer = process.env.REACT_APP_ID_DEEZER;
const idAlbum = "236529752";

const data = {
    grant_type: 'client_credentials',
    client_id: IdClient,
    client_secret: clientSecret,
};

export const fetchArtistInfo = async (id = idDeezer) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/deezer/artist/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'artiste', error.message);
        return error;
    }
};

export const fetchArtistAlbum = async (id = idAlbum) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/deezer/artist/album/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'album', error.message);
        return error;
    }
};

export const fetchAlbum = async (id = idDeezer) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/deezer/album/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'album', error.message);
        return error;
    }
};


export const fetchBestTracks = async(dictTracks) =>{
    try {
        var bestTracks = [];
        for(let track in dictTracks){
            const response = await axios.get(`http://localhost:5000/api/deezer/search/${track}/${dictTracks[track]}`);
            bestTracks.push(response.data);
        }
        return bestTracks;
    } catch (error) {
        console.error('Erreur lors de la récupération des informations des meilleurs singles', error.message);
        return error;
    }

}



