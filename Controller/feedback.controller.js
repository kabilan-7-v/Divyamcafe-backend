const Feedback = require("../Models/Addfeedback.model.js");

exports.addFeedback = async (req, res) => {
    try {
        const { msg, writtername, date, isbutton } = req.body;

        // Validation check
        if (!msg || !writtername || !date || isbutton === undefined) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create new feedback entry
        const newFeedback = await Feedback.create({
            msg,
            writtername,
            date,
            isbutton
        });

        return res.status(201).json({ message: "Feedback submitted successfully", feedback: newFeedback });

    } catch (error) {
        console.error("Error adding feedback:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
