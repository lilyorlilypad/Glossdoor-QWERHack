const BaseController = require("./base.controller");
const CompanyCatalog = require("../models/CompanyCatalog.model");
const Review = require("../models/Review.model");
const { getMetricsByCompanyId } = require("../services/metrics.service");

module.exports = class CompanyCatalogController extends BaseController {
  constructor() {
    super("/companycatalogs");
  }

  initRoutes() {
    this.router.get("/", this.getAllCompanyCatalogs.bind(this));
    this.router.get("/:companyId", this.getCompanyCatalogById.bind(this));
    this.router.post("/", this.createCompanyCatalog.bind(this));
    this.router.put("/:companyId", this.updateCompanyCatalog.bind(this));
    this.router.delete("/:companyId", this.deleteCompanyCatalog.bind(this));
    this.router.get("/metrics/:companyId", this.getMetrics.bind(this));
  }

  async getAllCompanyCatalogs(req, res) {
    try {
      const companyCatalogs = await CompanyCatalog.find();
      res.json(companyCatalogs);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getCompanyCatalogById(req, res) {
    const { companyId } = req.params;
    try {
      const companyCatalog = await CompanyCatalog.findById(companyId);
      if (companyCatalog) {
        res.json(companyCatalog);
      } else {
        res.status(404).json({ error: "Company catalog not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async createCompanyCatalog(req, res) {
    const {
      companyName,
      companyDescription,
      coreValues,
      deiEfforts,
      affinityGroups,
      ratings,
      reviews,
      numberOfReviews,
      industry,
      location,
    } = req.body;

    const newCompanyCatalog = new CompanyCatalog({
      companyName,
      companyDescription,
      coreValues,
      deiEfforts,
      affinityGroups,
      ratings,
      reviews,
      numberOfReviews,
      industry,
      location,
    });

    try {
      const savedCompanyCatalog = await newCompanyCatalog.save();
      res.status(201).json(savedCompanyCatalog);
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  async updateCompanyCatalog(req, res) {
    const { companyId } = req.params;
    const {
      companyName,
      companyDescription,
      coreValues,
      deiEfforts,
      affinityGroups,
      ratings,
      reviews,
      numberOfReviews,
      industry,
      location,
    } = req.body;

    try {
      const companyCatalog = await CompanyCatalog.findByIdAndUpdate(
        companyId,
        {
          companyName,
          companyDescription,
          coreValues,
          deiEfforts,
          affinityGroups,
          ratings,
          reviews,
          numberOfReviews,
          industry,
          location,
          updatedAt: Date.now(),
        },
        { new: true }
      );

      if (companyCatalog) {
        res.json(companyCatalog);
      } else {
        res.status(404).json({ error: "Company catalog not found" });
      }
    } catch (error) {
      res.status(400).json({ error: "Invalid input data" });
    }
  }

  async deleteCompanyCatalog(req, res) {
    const { companyId } = req.params;

    try {
      const companyCatalog = await CompanyCatalog.findByIdAndDelete(companyId);

      if (companyCatalog) {
        res.json({ message: "Company catalog deleted successfully" });
      } else {
        res.status(404).json({ error: "Company catalog not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getMetrics(req, res) {
    const { companyId } = req.params;
    const metrics = await getMetricsByCompanyId(companyId);
    if (!metrics) {
      // TODO: what if the company just doesn't exist?
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json(metrics);
    }
  }
}
