const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    msg: { type: String, required: true },
    writtername: { type: String, required: true },
    date: { type: Date, default: Date.now },  // Automatically stores the current date
    isbutton: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("Feedback", FeedbackSchema);
