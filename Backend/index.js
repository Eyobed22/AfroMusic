const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')


const songs = require('./routes/songs');
const statCount = require('./routes/statCount');
const songsInGenreCount = require('./routes/songsInGenreCount');
const artistData = require('./routes/artistData');
const songsInEachAlbum = require('./routes/songsInEachAlbum');

mongoose.connect('mongodb://localhost/AfroMusic')
    .then(()=> console.log('Connected to mongoDB'))
    .catch(err => console.error('Can not connect to mongoDB', err));

const app = express();

app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

app.use('/api/songs', songs);
app.use('/api/statCount', statCount);
app.use('/api/songsInGenreCount', songsInGenreCount);
app.use('/api/artistData', artistData);
app.use('/api/songsInEachAlbum', songsInEachAlbum);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});
