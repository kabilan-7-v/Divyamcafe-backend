const mongoose = require("mongoose");


const AddPlace = mongoose.Schema({
   imageurls: [{ type: String, required: true }], // List of image URLs
   heading: { type: String, required: true },
   description: { type: String, required: true },
   locationUrl: { type: String, required: true }
});
module.exports = mongoose.model("AddPlace",AddPlace);