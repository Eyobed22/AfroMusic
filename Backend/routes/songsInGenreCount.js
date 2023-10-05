const express = require('express');
const mongoose = require('mongoose');
const { Songs } = require('../models/songs');

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const songsInGenreCount = await Songs.aggregate([
            { $group: { _id: '$genre', count: { $sum: 1 } } },
        ])

        res.send(songsInGenreCount);
    }catch(err){
        //res.status(500).send(err);
        console.log(err)
    }
})

module.exports = router