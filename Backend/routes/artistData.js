const express = require('express');
const mongoose = require('mongoose');
const { Songs } = require('../models/songs');

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const artistData = await Songs.aggregate([{
            $group: {
                _id: '$artist',
                numberOfSongs: { $sum: 1 },
                numberOfAlbums: { $addToSet: '$album' }
              }
            },
            {
              $project: {
                artist: '$_id',
                numberOfSongs: 1,
                numberOfAlbums: { $size: '$numberOfAlbums' }
              }
            }
        ])

        res.send(artistData);
    }catch(err){
        //res.status(500).send(err);
        console.log(err)
    }
})

module.exports = router