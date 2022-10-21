import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BusinessContactSchema = new Schema(
  {
    contactname: String,
    contactnumber: String,
    contactemail: String,
  },
  {
    timestamps: true,
    collections: "contacts",
  }
);

export default mongoose.model("Contact", BusinessContactSchema);
