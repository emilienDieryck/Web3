const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    username: { type: String, required: true },
    comment: { type: String, required: true },

});

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    state: { type: String, required: true },
    comments: [commentSchema],
});



module.exports = mongoose.model('Book', bookSchema);