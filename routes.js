const express = require('express');
const axios = require('axios');
const dotEnv = require('dotenv').config();

const API_KEY = process.env.API_KEY;

console.log(process.env.API_KEY);

const router = express.Router()

module.exports = app => {
    app.post('/api/beer-me-search', async (req, res) => {
        try {
            const beer = req.body.searchTerm
            const beerNameFormat = beer.split(' ').join('_');
            //REMOVE API KEY
            const beerMeCall = await axios.get(`https://sandbox-api.brewerydb.com/v2/search?q=${beerNameFormat}&type=beer&key=${API_KEY}`);
            console.log('url', beerMeCall.data)
            res.send(beerMeCall.data)
        } catch (err) {
            console.log('get beer me data error', err)
        }
    })
}