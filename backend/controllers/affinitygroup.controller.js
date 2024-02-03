const AffinityGroup = require("../models/AffinityGroup.model");
const BaseController = require("./base.controller");

module.exports = class AffinityGroupController extends BaseController {
  constructor() {
    super("/affinitygroups");
  }

  initRoutes() {
    this.router.get("/", this.getAllAffinityGroups.bind(this));
    this.router.get("/:groupId", this.getAffinityGroupById.bind(this));
    this.router.post("/", this.createAffinityGroup.bind(this));
    this.router.put("/:groupId", this.updateAffinityGroup.bind(this));
    this.router.delete("/:groupId", this.deleteAffinityGroup.bind(this));
  }

  async getAllAffinityGroups(req, res) {
    try {
      const affinityGroups = await AffinityGroup.find();
      res.json(affinityGroups);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getAffinityGroupById(req, res) {
    const { groupId } = req.params;
    try {
      const affinityGroup = await AffinityGroup.findById(groupId);
      if (affinityGroup) {
        res.json(affinityGroup);
      } else {
        res.status(404).json({ error: "Affinity group not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async createAffinityGroup(req, res) {
    const { groupName, groupDescription, groupURL, companyId } = req.body;

    const newAffinityGroup = new AffinityGroup({
      groupName,
      groupDescription,
      groupURL,
      companyId,
    });

    try {
      const savedAffinityGroup = await newAffinityGroup.save();
      res.status(201).json(savedAffinityGroup);
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  async updateAffinityGroup(req, res) {
    const { groupId } = req.params;
    const { groupName, groupDescription, groupURL, companyId } = req.body;

    try {
      const affinityGroup = await AffinityGroup.findByIdAndUpdate(
        groupId,
        {
          groupName,
          groupDescription,
          groupURL,
          companyId,
          updatedAt: Date.now(),
        },
        { new: true }
      );

      if (affinityGroup) {
        res.json(affinityGroup);
      } else {
        res.status(404).json({ error: "Affinity group not found" });
      }
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  async deleteAffinityGroup(req, res) {
    const { groupId } = req.params;

    try {
      const affinityGroup = await AffinityGroup.findByIdAndDelete(groupId);

      if (affinityGroup) {
        res.json({ message: "Affinity group deleted successfully" });
      } else {
        res.status(404).json({ error: "Affinity group not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
