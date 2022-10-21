import mongoose from "mongoose";

const Schema = new mongoose.Schema();

const BusinessContactSchema = new Schema(
  {
    contactname: String,
    contactnumber: String,
    contactEmail: String,
  },
  {
    timestamps: true,
    collections: "contacts",
  }
);

export default mongoose.model("Contact", BusinessContactSchema);
