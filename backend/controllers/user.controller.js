const User = require("../models/User.model");
const BaseController = require("./base.controller");

module.exports = class UserController extends BaseController {
  constructor() {
    super("/users");
  }

  async initRoutes() {
    this.router.get("/", this.getAllUsers.bind(this));
    this.router.get("/:userId", this.getUserById.bind(this));
    this.router.post("/", this.createUser.bind(this));
    this.router.put("/:userId", this.updateUser.bind(this));
    this.router.delete("/:userId", this.deleteUser.bind(this));
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getUserById(req, res) {
    const { userId } = req.params;
    try {
      const user = await User.findById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async createUser(req, res) {
    const { username, email, passwordHash } = req.body;
    const newUser = new User({ username, email, passwordHash });

    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  async updateUser(req, res) {
    const { userId } = req.params;
    const { username, email, passwordHash } = req.body;

    try {
      const user = await User.findByIdAndUpdate(
        userId,
        { username, email, passwordHash, updatedAt: Date.now() },
        { new: true }
      );

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  async deleteUser(req, res) {
    const { userId } = req.params;

    try {
      const user = await User.findByIdAndDelete(userId);

      if (user) {
        res.json({ message: "User deleted successfully" });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
