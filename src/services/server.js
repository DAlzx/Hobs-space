const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Serveur écoutant sur le port ${PORT}`);
});

app.get('/api/deezer/artist/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://api.deezer.com/artist/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'artiste', error.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.get('/api/deezer/artist/album/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://api.deezer.com/album/${req.params.id}`);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'artiste', error.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.get('/api/deezer/album/:id', async (req, res) => {
    try {
        const response = await axios.get(`https://api.deezer.com/artist/${req.params.id}/top?limit=10`);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'album', error.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});

app.get('/api/deezer/search/:track/:artist', async (req, res) => {
    try {
        const response = await axios.get(`https://api.deezer.com/search?q=${req.params.track}%20${req.params.artist}`);
        res.json(response.data);
    } catch (error) {
        console.error('Erreur lors de la récupération des informations de l\'album', error.message);
        res.status(500).json({ error: 'Erreur serveur' });
    }
});
