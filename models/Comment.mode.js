const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  text: String,
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  _postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;