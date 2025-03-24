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

exports.updateFeedbackIsButton = async (req, res) => {
    try {
        const { id } = req.params;  // Get feedback ID from URL params
        const { isbutton } = req.body;  // Get new isbutton value from request body

        // Validate input
        if (isbutton === undefined) {
            return res.status(400).json({ message: "isbutton field is required" });
        }

        // Find and update the feedback entry
        const updatedFeedback = await Feedback.findByIdAndUpdate(
            id,
            { isbutton },
            { new: true }  // Return the updated document
        );

        // If feedback not found
        if (!updatedFeedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }

        return res.status(200).json({ message: "Feedback updated successfully", feedback: updatedFeedback });

    } catch (error) {
        console.error("Error updating feedback:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
