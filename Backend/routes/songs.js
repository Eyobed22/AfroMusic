const express = require('express');
const mongoose = require('mongoose');
const {Songs, validate} = require('../models/songs');

const router = express.Router();


router.get('/', async (req, res)=>{
    const songs = await Songs.find().sort('name');
    res.send(songs);
})

router.get('/:id', async (req, res)=>{
    try{
        const Songs = await Songs.find({_id: req.params.id});
        res.send(songs);
    }catch(err){
        return res.status(404).send(err.message)
    }
})

router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try{
        const songs = new Songs({
            title: req.body.title,
            artist: req.body.artist,  
            album: req.body.album,
            genre: req.body.genre,
        });
        
        await songs.save();
        res.send(songs)
        console.log(songs)
    }catch(err){
        return res.status(400).send(err.message)
    }
});

router.put('/:id', async (req, res)=>{
    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message)
    
    try{
        try{
            const songs = await Songs.findByIdAndUpdate(req.params.id, {
                $set: {
                    title: req.body.title,
                    artist: req.body.artist,  
                    album: req.body.album,
                    genre: req.body.genre,
                }
            }, {new: true})
    
            res.send(songs)
        }catch(err){
            return res.send(err.message)
        }
    }catch(err){
        return res.status(400).send(err.message);
    }

});

router.delete('/:id', async (req, res)=>{
    try{
        const songs = await Songs.findByIdAndRemove(req.params.id);
        res.send(songs)
    }catch(err){
        return res.status(400).send(err.message)
    }
})



module.exports = router;