const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const commentSchema = require("./comment")

const commentSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comments: [commentSchema],
  upvotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  downvotes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  totalVotes: {
    type: Number,
    default: () => {
      if (this.upvotes && this.downvotes) {
        this.upvotes.length - this.downvotes.length;
      } else if (this.upvotes) {
        return this.upvotes.length;
      } else {
        return 0;
      }
    },
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);
const Post = mongoose.model("post", postSchema)
module.exports = (Comment, Post)