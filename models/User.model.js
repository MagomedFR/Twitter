const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  saved: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;