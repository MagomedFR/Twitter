const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: String,
    text: String,

    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    _likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;