const mongoose = require('mongoose');
const Joi = require('joi');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 255
    },
    artist: {
        type: String,
        minlength: 1,
        maxlength: 255,
        required: true
    },
    album: {
        type: String,
        minlength: 1,
        maxlength: 255
    },
    genre: {
        type: String,
        required: true
    }
});

const Songs = mongoose.model('Songs', songSchema);

const validateSongs = (songs) => {
    const schema = Joi.object({
        title: Joi.string().min(1).max(255).required(),
        artist: Joi.string().min(1).max(255).required(),
        album: Joi.string().min(1).max(255),
        genre: Joi.string().required()
    });

    return schema.validate(songs)
}

exports.Songs = Songs;
exports.validate = validateSongs;