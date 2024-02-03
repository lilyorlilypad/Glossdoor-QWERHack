const mongoose = require("mongoose");
const { Schema } = mongoose;

const affinityGroupSchema = new Schema({
  groupName: String,
  groupDescription: String,
  groupURL: String,
  companyId: { type: Schema.Types.ObjectId, ref: "CompanyCatalog" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  // Any other relevant company information.
});

const AffinityGroup = mongoose.model("AffinityGroup", affinityGroupSchema);

module.exports = AffinityGroup;
