const Comment = require("../models/Comment.model");
const BaseController = require("./base.controller");

module.exports = class CommentController extends BaseController {
  constructor() {
    super("/comments");
  }

  initRoutes() {
    this.router.get("/", this.getAllComments.bind(this));
    this.router.get("/:commentId", this.getCommentById.bind(this));
    this.router.post("/", this.createComment.bind(this));
    this.router.put("/:commentId", this.updateComment.bind(this));
    this.router.delete("/:commentId", this.deleteComment.bind(this));
  }

  async getAllComments(req, res) {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getCommentById(req, res) {
    const { commentId } = req.params;
    try {
      const comment = await Comment.findById(commentId);
      if (comment) {
        res.json(comment);
      } else {
        res.status(404).json({ error: "Comment not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async createComment(req, res) {
    const { reviewId, userId, content } = req.body;

    const newComment = new Comment({
      reviewId,
      userId,
      content,
    });

    try {
      const savedComment = await newComment.save();
      res.status(201).json(savedComment);
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  async updateComment(req, res) {
    const { commentId } = req.params;
    const { reviewId, userId, content } = req.body;

    try {
      const comment = await Comment.findByIdAndUpdate(
        commentId,
        {
          reviewId,
          userId,
          content,
          updatedAt: Date.now(),
        },
        { new: true }
      );

      if (comment) {
        res.json(comment);
      } else {
        res.status(404).json({ error: "Comment not found" });
      }
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  async deleteComment(req, res) {
    const { commentId } = req.params;

    try {
      const comment = await Comment.findByIdAndDelete(commentId);

      if (comment) {
        res.json({ message: "Comment deleted successfully" });
      } else {
        res.status(404).json({ error: "Comment not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
