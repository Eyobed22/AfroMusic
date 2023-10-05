const express = require('express');
const mongoose = require('mongoose');
const { Songs } = require('../models/songs');

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const songsCount = await Songs.countDocuments();

        const albumCount = await Songs.aggregate([
            { $group: { _id: '$album', count: { $sum: 1 } } }
        ])

        const artistCount = await Songs.aggregate([
            { $group: { _id: '$artist', count: { $sum: 1 } } }
        ])

        const genreCount = await Songs.aggregate([
            { $group: { _id: '$genre', count: { $sum: 1 } } }
        ])

        res.send([{
            'songs': songsCount.toString(),
            'albums': albumCount.length.toString(),
            'artists': artistCount.length.toString(),
            'genres': genreCount.length.toString(),
        }]);
    }catch(err){
        //res.status(500).send(err);
        console.log(err)
    }
})

module.exports = router