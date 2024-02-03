const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  reviewId: { type: Schema.Types.ObjectId, ref: "Review" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  content: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  // Additional fields as needed.
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
