const Review = require("../models/Review.model");
const BaseController = require("./base.controller");

module.exports = class ReviewController extends BaseController {
  constructor() {
    super("/reviews");
  }

  initRoutes() {
    this.router.get("/", this.getAllReviews.bind(this));
    this.router.get("/:reviewId", this.getReviewById.bind(this));
    this.router.post("/", this.createReview.bind(this));
    this.router.put("/:reviewId", this.updateReview.bind(this));
    this.router.delete("/:reviewId", this.deleteReview.bind(this));
    this.router.get("/company/:companyId", this.getReviewsByCompanyId.bind(this));
  }

  async getAllReviews(req, res) {
    try {
      const reviews = await Review.find();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getReviewById(req, res) {
    const { reviewId } = req.params;
    try {
      const review = await Review.findById(reviewId);
      if (review) {
        res.json(review);
      } else {
        res.status(404).json({ error: "Review not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async createReview(req, res) {
    const {
      companyId,
      userId,
      title,
      content,
      comments,
      upvotes,
      downvotes,
      tags,
      metrics,
    } = req.body;

    const newReview = new Review({
      companyId,
      userId,
      title,
      content,
      comments,
      upvotes,
      downvotes,
      tags,
      metrics,
    });

    try {
      const savedReview = await newReview.save();
      res.status(201).json(savedReview);
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  async updateReview(req, res) {
    const { reviewId } = req.params;
    const {
      companyId,
      userId,
      title,
      content,
      comments,
      upvotes,
      downvotes,
      tags,
      metrics,
    } = req.body;

    try {
      const review = await Review.findByIdAndUpdate(
        reviewId,
        {
          companyId,
          userId,
          title,
          content,
          comments,
          upvotes,
          downvotes,
          tags,
          metrics,
          updatedAt: Date.now(),
        },
        { new: true }
      );

      if (review) {
        res.json(review);
      } else {
        res.status(404).json({ error: "Review not found" });
      }
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  async deleteReview(req, res) {
    const { reviewId } = req.params;

    try {
      const review = await Review.findByIdAndDelete(reviewId);

      if (review) {
        res.json({ message: "Review deleted successfully" });
      } else {
        res.status(404).json({ error: "Review not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getReviewsByCompanyId(req, res) {
    const { companyId } = req.params;
    try {
      const records = await Review.find({ companyId });
      res.status(200).json(records);
    } catch (error) {
      console.error("Error getting records by Company ID:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
