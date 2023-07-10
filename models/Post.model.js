const { text } = require("express");
const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: String,
    text: String,

    _userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },

    _likes: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    }
})

const Book = mongoose.model("Post", postSchema);

module.exports = Book;