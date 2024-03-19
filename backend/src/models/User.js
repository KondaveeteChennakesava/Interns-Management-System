const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let InternSchema = new Schema({
  username: {
    type: String,
    requird: true,
  },
  internId: {
    type: String,
    requird: true,
  },
  email: {
    type: String,
    requird: true,
  },
  campus: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  bankAcntNo: {
    type: String,
  },
  acntHolderName: {
    type: String,
  },
  ifscCode: {
    type: String,
  },
  bankBranch: {
    type: String,
  },
  passout: {
    type: Number,
  },
  gender: {
    type: String,
  },
  slot: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  createdDate: {
    type: String,
  },
  updatedDate: {
    type: String,
  },

  addedBy: {
    type: String,
  },
  technology: {
    type: String,
    requird: true,
  },
  mobileNo: {
    type: Number,
    requird: true,
  },
  attendance_status: {
    type: String,
    default: "A",
    enum: ["P", "A"],
  },
});
// export model intern with InternSchema
module.exports = mongoose.model("intern", InternSchema);
