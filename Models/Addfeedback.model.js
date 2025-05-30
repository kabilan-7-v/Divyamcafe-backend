const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: String, required: true },
    phone: { type: String, required: true },
    feedback: { type: String, required: true },
    isbutton: { type: Boolean, default: true },
    ishomepage: { type: Boolean, default: true }

}, { timestamps: true });

module.exports = mongoose.model("Feedback", FeedbackSchema);
