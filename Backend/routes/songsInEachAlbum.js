const express = require('express');
const mongoose = require('mongoose');
const { Songs } = require('../models/songs');

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const songsInEachAlbum = await Songs.aggregate([{
            $group: {
                _id: '$album',
                numberOfSongs: { $sum: 1 }
              }
            },
            {
              $project: {
                album: '$_id',
                numberOfSongs: 1
              }
            }
        ])

        res.send(songsInEachAlbum);
    }catch(err){
        //res.status(500).send(err);
        console.log(err)
    }
})

module.exports = router