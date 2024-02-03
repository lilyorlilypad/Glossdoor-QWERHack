const mongoose = require("mongoose");
const { Schema } = mongoose;

const companyCatalogSchema = new Schema({
  companyName: String,
  companyDescription: String,
  coreValues: String,
  deiEfforts: String,
  affinityGroups: [{ type: Schema.Types.ObjectId, ref: "AffinityGroup" }],
  ratings: {
    metricA: Number,
    metricB: Number,
    metricC: Number,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  // Any other relevant company information.
});

const CompanyCatalog = mongoose.model("CompanyCatalog", companyCatalogSchema);

module.exports = CompanyCatalog;