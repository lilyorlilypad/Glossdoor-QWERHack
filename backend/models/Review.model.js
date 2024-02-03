const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  companyId: { type: Schema.Types.ObjectId, ref: "CompanyCatalog" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  content: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  upvotes: Number,
  downvotes: Number,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  // Any other relevant post information.
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
