const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //square brackets around the campsites properties allow you to store an array of campsite IDs in this field.
    campsites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
});

const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = Favorite;