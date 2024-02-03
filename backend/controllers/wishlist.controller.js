const Wishlist = require("../models/Wishlist.model");
const BaseController = require("./base.controller");

module.exports = class WishlistController extends BaseController {
  constructor() {
    super("/wishlists");
  }

  initRoutes() {
    this.router.get("/", this.getAllWishlists.bind(this));
    this.router.get("/:wishlistId", this.getWishlistById.bind(this));
    this.router.post("/", this.createWishlist.bind(this));
    this.router.put("/:wishlistId", this.updateWishlist.bind(this));
    this.router.delete("/:wishlistId", this.deleteWishlist.bind(this));
  }

  async getAllWishlists(req, res) {
    try {
      const records = await Wishlist.find();
      res.status(200).json(records);
    } catch (error) {
      console.error("Error getting records:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getWishlistById(req, res) {
    const { wishlistId } = req.params;
    try {
      const record = await Wishlist.findById(wishlistId);
      if (!record) {
        return res.status(404).json({ error: "Record not found" });
      }
      res.status(200).json(record);
    } catch (error) {
      console.error("Error getting record by ID:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createWishlist(req, res) {
    try {
      const { companyId, userId, content } = req.body;
      const newRecord = await Wishlist.create({ companyId, userId, content });
      res.status(201).json(newRecord);
    } catch (error) {
      console.error("Error creating record:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateWishlist(req, res) {
    try {
      const { wishlistId, companyId, userId, content } = req.body;
      const updatedRecord = await Wishlist.findByIdAndUpdate(
        wishlistId,
        { companyId, userId, content },
        { new: true }
      );
      if (!updatedRecord) {
        return res.status(404).json({ error: "Record not found" });
      }
      res.status(200).json(updatedRecord);
    } catch (error) {
      console.error("Error updating record:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteWishlist(req, res) {
    const { wishlistId } = req.params;
    try {
      const deletedRecord = await Wishlist.findByIdAndDelete(wishlistId);
      if (!deletedRecord) {
        return res.status(404).json({ error: "Record not found" });
      }
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting record:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
